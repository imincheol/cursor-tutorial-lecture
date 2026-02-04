# 실습 3: 스타일 패턴 재사용

## 실습 목표

Primary 버튼 스타일을 참조하여 Secondary, Danger 버튼 스타일을 만듭니다.

## 실습 단계

### Step 1: Primary 버튼 확인

`button.html` 파일을 브라우저에서 열어 Primary 버튼 스타일을 확인하세요.

**주요 스타일**:
- 그라데이션 배경
- 호버 효과 (transform, shadow)
- 액티브 상태
- Disabled 상태

### Step 2: Past Chat 참조하여 다른 버튼 추가

```
@past-chat "Primary 버튼" 스타일을 참고해서
Secondary와 Danger 버튼 스타일도 만들어줘.

- Secondary: 회색 계열 그라데이션
- Danger: 빨간색 계열 그라데이션
- 같은 호버/액티브/disabled 효과 적용
```

### 예상 결과

```css
/* Secondary 버튼 */
.btn-secondary {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(108, 117, 125, 0.3);
}

/* Danger 버튼 */
.btn-danger {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(245, 87, 108, 0.3);
}
```

## 학습 포인트

- CSS 패턴 재사용
- 일관된 디자인 시스템
- 색상만 변경하고 구조는 동일
