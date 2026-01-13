import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cart, setCart] = useState({}); // 장바구니 상태 관리 (버그 시뮬레이션용)

  // 상품 데이터 로딩
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);

        // API 호출 시뮬레이션
        await new Promise(resolve => setTimeout(resolve, 1500));

        // 상품 데이터 (일부러 다양한 버그 상황 포함)
        const mockProducts = [
          {
            id: 1,
            name: '프리미엄 노트북',
            price: 1200000,
            category: 'electronics',
            stock: 5,
            rating: 4.5
          },
          {
            id: 2,
            name: '무선 헤드폰',
            price: 250000,
            category: 'electronics',
            stock: 0, // 재고 없음
            rating: 4.2
          },
          {
            id: 3,
            name: '커피 머신',
            price: 180000,
            category: 'kitchen',
            stock: 3,
            rating: 4.8
          },
          {
            id: 4,
            name: '요가 매트',
            price: 45000,
            category: 'sports',
            stock: 10,
            rating: 4.0
          }
        ];

        setProducts(mockProducts);
      } catch (err) {
        setError('상품 목록을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // 장바구니 추가 (의도적 버그: 수량 업데이트가 UI에 반영되지 않을 수 있음)
  const addToCart = (productId) => {
    console.log(`장바구니에 상품 ${productId} 추가 시도`);

    setCart(prevCart => {
      const newCart = { ...prevCart };

      // 버그: 수량이 제대로 업데이트되지 않을 수 있음
      if (newCart[productId]) {
        newCart[productId] += 1;
      } else {
        newCart[productId] = 1;
      }

      console.log('장바구니 상태:', newCart);
      return newCart;
    });
  };

  // 장바구니 수량 계산 (버그: 계산 로직 오류 가능)
  const getTotalItems = () => {
    try {
      return Object.values(cart).reduce((total, quantity) => {
        // 버그: quantity가 숫자가 아닐 수 있음
        return total + (typeof quantity === 'number' ? quantity : 0);
      }, 0);
    } catch (error) {
      console.error('장바구니 수량 계산 오류:', error);
      return 0;
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="card text-center">
          <div className="loading" style={{ width: '40px', height: '40px' }}></div>
          <p className="mt-3">상품 목록을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="card text-center">
          <h2>오류 발생</h2>
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1>상품 목록</h1>
          <div className="cart-info">
            장바구니: {getTotalItems()}개 상품
          </div>
        </div>

        <div className="grid grid-2">
          {products.map(product => (
            <div key={product.id} className="card">
              <h3>{product.name}</h3>
              <p className="mb-2">가격: {product.price.toLocaleString()}원</p>
              <p className="mb-2">카테고리: {product.category}</p>
              <p className="mb-2">평점: ⭐ {product.rating}</p>
              <p className="mb-3" style={{
                color: product.stock > 0 ? 'var(--success-color)' : 'var(--error-color)'
              }}>
                재고: {product.stock > 0 ? `${product.stock}개` : '품절'}
              </p>

              <button
                className={`btn ${product.stock > 0 ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => addToCart(product.id)}
                disabled={product.stock === 0}
                style={{ width: '100%' }}
              >
                {product.stock > 0 ? '장바구니에 추가' : '품절'}
              </button>
            </div>
          ))}
        </div>

        {getTotalItems() > 0 && (
          <div className="card" style={{ marginTop: '2rem', backgroundColor: 'var(--card-bg)' }}>
            <h3>장바구니 미리보기</h3>
            <p>총 {getTotalItems()}개의 상품이 담겨있습니다.</p>
            <div className="mb-3">
              {Object.entries(cart).map(([productId, quantity]) => {
                const product = products.find(p => p.id === parseInt(productId));
                return product ? (
                  <div key={productId} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>{product.name}</span>
                    <span>{quantity}개</span>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;