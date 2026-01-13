import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 실시간 유효성 검사 (버그: 일부 검증 로직 오류)
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // 이름 검증
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    // 이메일 검증 (버그: 정규식 오류 가능성)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    // 제목 검증
    if (!formData.subject.trim()) {
      newErrors.subject = '제목을 입력해주세요.';
    }

    // 메시지 검증
    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '메시지는 최소 10자 이상 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('폼 제출 시작:', formData);

    if (!validateForm()) {
      console.log('유효성 검사 실패');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // API 호출 시뮬레이션 (가끔 실패)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.25) {
            reject(new Error('서버 오류가 발생했습니다.'));
          } else {
            resolve({ success: true });
          }
        }, Math.random() * 2000 + 1000);
      });

      console.log('API 호출 성공');
      setSubmitStatus({ type: 'success', message: '메시지가 성공적으로 전송되었습니다!' });

      // 폼 초기화 (버그: 초기화가 제대로 안 될 수 있음)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('제출 실패:', error);
      setSubmitStatus({ type: 'error', message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>연락처</h1>
        <p className="mb-4">문의사항이 있으시면 언제든 연락주세요.</p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-2">
            <div className="form-group">
              <label htmlFor="name">이름 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">이메일 *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">제목 *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className={errors.subject ? 'error' : ''}
            />
            {errors.subject && <div className="error-message">{errors.subject}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="message">메시지 *</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
              placeholder="문의하실 내용을 자세히 적어주세요."
              className={errors.message ? 'error' : ''}
            />
            {errors.message && <div className="error-message">{errors.message}</div>}
          </div>

          {submitStatus && (
            <div className={`mb-3 ${submitStatus.type === 'success' ? 'text-success' : 'text-error'}`}>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{ width: '100%', padding: '1rem' }}
          >
            {isSubmitting ? (
              <>
                <span className="loading"></span>
                전송 중...
              </>
            ) : (
              '메시지 보내기'
            )}
          </button>
        </form>

        <div className="mt-4" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          <p><strong>Debug Mode 실습 팁:</strong></p>
          <ul>
            <li>빈 칸으로 제출해보세요 (유효성 검사)</li>
            <li>이메일을 틀리게 입력해보세요 (정규식 검증)</li>
            <li>짧은 메시지로 제출해보세요 (길이 검증)</li>
            <li>여러 번 제출해서 간헐적 실패를 확인해보세요</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;