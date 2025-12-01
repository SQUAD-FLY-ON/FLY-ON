# Fly:On

### 전국 패러글라이딩 체험장 추천 및 비행 기록 서비스

Fly:On은 전국 패러글라이딩 체험장 정보를 한눈에 확인할 수 있도록 통합하고, 사용자의 실제 비행 데이터를 기반으로 여행 계획과 체험 상품 선택까지 연결되는 날씨·데이터 기반의 패러글라이딩 특화 여행 플랫폼입니다.

팀원: 5인 개발 (BE 송해찬, BE 최성현, FE 이주영, FE 이하은, 디자인 함은서)

개발 기간: 2025.04.13 ~ 2025.10.27

설치: https://m.onestore.co.kr/v2/ko-kr/app/0001002231

# 기술 스택

## Frontend (App)

- Language: TypeScript
- Library & Framework: React Native, Styled-Components, Axios, Tanstack-Query
- Deploy: Vercel, Expo
- 기타: Android Studio

## Backend

- Language: JAVA
- Library & Framework: Spring, Data JPA
- DB: MySQL, Redis, MongoDB
- ORM: Data JPA
- DevOps: Docker

## Design

- Figma

# 주요 기능

### 여행 일정 생성

지역 별 체험장 또는 날씨 정보를 바탕으로 패러글라이딩 체험장을 추천하고 주변 관광지를 알려줍니다.

패러글라이딩 체험장과 관광지를 선택하면 AI를 활용해 여행 일정을 추천 받습니다.

### 비행 기록

등록한 여행 일정을 바탕으로 해당 체험장에서 비행 기록을 저장합니다.

비행 좌표를 저장하여 해당 체험장의 비행 영상을 Cesium API를 이용해 실시간 시뮬레이션 합니다.

저장된 비행 고도를 바탕으로 사용자의 비행 레벨을 국내 산 높이를 기준으로 나누어 보여줍니다.

---

## Frontend 디렉토리 구조

```markdown
frontend
├── api
├── app
├── assets
├── components
├── constants
├── dummy
├── hooks
├── libs
├── schema
├── store
└── types
```

- **api**
    
    Axios 기반 API Client 설정 및 공통 네트워크 처리 레이어
    
    API 인스턴스(`apiClient`) 정의와 요청·응답 인터셉터 설정을 통해
    
    서버 에러 메시지를 공통 알림 UI로 노출하는 로직 관리
    
    - `apiClient.ts`
        
        → axios 인스턴스 생성 및 기본 설정
        
    - `setupInterceptors.ts`
        
        → 서버 에러 응답 인터셉터 등록 및 알림 처리
        
- **app**
    
    Expo Router 기반 라우팅 및 화면 구성 관리 폴더
    
    파일 및 폴더 구조가 곧 네비게이션 라우트 구조가 되며,
    
    각 화면(Screen) 및 레이아웃 설정을 파일 단위로 정의
    
    ```markdown
    app
    ├── (tabs)
    │			├── air
    │			├── community
    │			├── explore
    │			├── my-schedules
    │			├── schedule
    │			├── user
    ├── _layout.tsx
    ├── intro.tsx
    ├── login.tsx
    └── signup.tsx
    ```
    
- **assets**
    
    이미지, 아이콘, 폰트 등 정적 리소스 파일 모음
    
- **components**
    
    화면 전반에서 재사용되는 공통 UI 컴포넌트 관리
    
- **constants**
    
    전역 상수 값 정의 (텍스트 상수, 여행 세부 지역 관련 상수 등)
    
- **dummy**
    
    개발 및 테스트를 위한 더미 데이터 관리 (체험장 이미지, 비행 기록 API 등)
    
- **hooks**
    
    커스텀 React Hooks 모음
    
    (여행 일정 관련 Tanstack Query 라이브러리 관리, 여행 일정 드래그 앤 드롭 기능 등)
    
- **libs**
    
    API 통신 및 서버 데이터 처리 관련 유틸 함수 모음 폴더
    
    각 도메인 별 `fetch` 함수 관리
    
- **schema**
    
    Zod 기반 입력값 유효성 검증 스키마 관리 폴더
    
    회원가입·로그인 폼 데이터의 타입 정의 및 검증 로직을 담당
    
- **store**
    
    전역 상태 관리 로직 (Zustand 상태 스토어 설정 및 알림용 커스텀 모달)
    
- **types**
    
    TypeScript 타입 및 인터페이스 전역 정의
    

## 레퍼런스

https://reactnative.dev/

https://docs.expo.dev/versions/latest/sdk/map-view/

https://docs.expo.dev/versions/latest/sdk/webview/

https://docs.expo.dev/more/expo-cli/

https://tanstack.com/query/latest/docs/framework/react/reference/useQuery
