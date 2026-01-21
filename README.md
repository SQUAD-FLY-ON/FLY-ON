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

| 기능 | 화면 |
| :--- | :--- |
| **여행 날짜 선택하기** | <img width="390" height="844" alt="일정추가하기1" src="https://github.com/user-attachments/assets/54be835e-bbcf-4941-8aea-0aaf311070bc" /> |
| **여행 지역 선택하기** | <img src="https://github.com/user-attachments/assets/5ef5dae2-a31a-4d8b-9d6c-24c838fe889a" width="200" alt="일정추가하기2"> <img src="https://github.com/user-attachments/assets/a21196cf-0356-493d-ace7-6162523a197e" width="200" alt="일정 추가하기2-1"> |
| **체험장/장소 선택하기** | <img src="https://github.com/user-attachments/assets/24836a64-fdac-4d4d-b90e-a915bc346b6b" width="200" alt="일정추가하기3"> <img src="https://github.com/user-attachments/assets/c3f291f6-8c38-49c1-8a36-d71878bc58df" width="200" alt="일정추가하기3-1"> |
| **AI가 짜준 일정 편집하기** | <img src="https://github.com/user-attachments/assets/ca2c5592-5f82-46bb-b8de-77a561e2b008" width="200" alt="일정추가하기4"> |
| **완료** | <img src="https://github.com/user-attachments/assets/e0e4f4fc-58ca-471f-b1c1-9ac10adc7b70" width="200" alt="일정추가하기5"> |

<br><br>

### 비행 기록

등록한 여행 일정을 바탕으로 해당 체험장에서 비행 기록을 저장합니다.

비행 좌표를 저장하여 해당 체험장의 비행 영상을 Cesium API를 이용해 실시간 시뮬레이션 합니다.

저장된 비행 고도를 바탕으로 사용자의 비행 레벨을 국내 산 높이를 기준으로 나누어 보여줍니다.


