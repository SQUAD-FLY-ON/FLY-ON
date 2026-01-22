# Fly:On
<img width="180" alt="앱아이콘" src="https://github.com/user-attachments/assets/0d139a3d-8e45-409f-b6a8-54cdb0eb7241" />

### 전국 패러글라이딩 체험장 추천 및 비행 기록 서비스

Fly:On은 전국 패러글라이딩 체험장 정보를 한눈에 확인할 수 있도록 통합하고, 사용자의 실제 비행 데이터를 기반으로 여행 계획과 체험 상품 선택까지 연결되는 날씨·데이터 기반의 패러글라이딩 특화 여행 플랫폼입니다.

팀원: 5인 개발 (BE 송해찬, BE 최성현, FE 이주영, FE 이하은, 디자인 함은서)

개발 기간: 2025.04.13 ~ 2025.10.27

설치: https://m.onestore.co.kr/v2/ko-kr/app/0001002231 (현재 서버 중단)

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
| **여행 날짜 선택하기** | <img width="200" alt="일정추가하기1" src="https://github.com/user-attachments/assets/54be835e-bbcf-4941-8aea-0aaf311070bc" /> |
| **여행 지역 선택하기** | <img src="https://github.com/user-attachments/assets/5ef5dae2-a31a-4d8b-9d6c-24c838fe889a" width="200" alt="일정추가하기2"> <img src="https://github.com/user-attachments/assets/a21196cf-0356-493d-ace7-6162523a197e" width="200" alt="일정 추가하기2-1"> |
| **체험장/장소 선택하기** | <img src="https://github.com/user-attachments/assets/24836a64-fdac-4d4d-b90e-a915bc346b6b" width="200" alt="일정추가하기3"> <img src="https://github.com/user-attachments/assets/c3f291f6-8c38-49c1-8a36-d71878bc58df" width="200" alt="일정추가하기3-1"> |
| **AI기반 일정 생성** | <img width="200" alt="AI 기반 일정 생성중" src="https://github.com/user-attachments/assets/51e53b2a-d1dd-43c0-85f0-802d82a5312c" /> <img width="200" alt="AI 기반 일정 생성중2" src="https://github.com/user-attachments/assets/c05c969d-4d1c-4f8f-b29b-ce443e6a803d" />|
| **AI기반 생성 일정 편집하기** | <img src="https://github.com/user-attachments/assets/ca2c5592-5f82-46bb-b8de-77a561e2b008" width="200" alt="일정추가하기4"> |
| **완료** | <img src="https://github.com/user-attachments/assets/e0e4f4fc-58ca-471f-b1c1-9ac10adc7b70" width="200" alt="일정추가하기5"> |
| **나의 여행 페이지** | <img width="200" alt="나의 여행 페이지" src="https://github.com/user-attachments/assets/68dc7b90-9284-424d-b3a9-73ab8e77f173" /> <img width="200" alt="나의 여행 페이지-1" src="https://github.com/user-attachments/assets/e3c47dc3-69fd-44b4-8b79-2f80e5bdfda9" /> <img width="200" alt="나의 일정 페이지" src="https://github.com/user-attachments/assets/8007b727-2139-4ed3-be48-09069badcd5c" />|

<br><br>

### 비행 기록

등록한 여행 일정을 바탕으로 해당 체험장에서 비행 기록을 저장합니다.

비행 좌표를 저장하여 해당 체험장의 비행 영상을 Cesium API를 이용해 실시간 시뮬레이션 합니다.

저장된 비행 고도를 바탕으로 사용자의 비행 레벨을 국내 산 높이를 기준으로 나누어 보여줍니다.

| **비행 기록 시작 전** | **비행 기록 중** | **비행 기록 리포트** | **비행 기록 저장 완료** |
| :---: | :---: | :---: | :---: |
| <img width="200" alt="비행 기록하기 페이지 _비행 기록 시작 전" src="https://github.com/user-attachments/assets/5eaa9880-ac9a-4bde-9144-8620f0507433" /> | <img width="200" alt="비행 기록하기 페이지_비행기록 중" src="https://github.com/user-attachments/assets/6c1f859f-bc7d-4dd0-99cd-eb0a5d850470" /> | <img width="200" alt="비행 기록하기 페이지_리포트" src="https://github.com/user-attachments/assets/c4e9b3b8-ca66-402c-bbbb-88b8de8d9384" /> | <img width="200" alt="비행 기록하기 페이지_비행기록 저장 완료" src="https://github.com/user-attachments/assets/0888f937-e105-468f-acf8-a80c960a585e" /> |

<br><br>

### 메인 화면

자신의 여행일정을 보여주고, 가까운 체험장 또는 날씨가 맑은 지역의 체험장을 추천해줍니다.

또한 체험장을 직접 탐색할 수 있습니다.

| 기능 | 화면 |
| :--- | :--- |
| **메인 화면** | <img width="200" alt="메인화면 전체-1" src="https://github.com/user-attachments/assets/365ad398-5520-4b04-b53d-ec7588e1720f" /> <img width="200" alt="메인화면 전체" src="https://github.com/user-attachments/assets/62003bdd-e29c-4228-a621-ffc9ada14211" /> <img width="200" alt="체험장 추천 기준 변경 화면" src="https://github.com/user-attachments/assets/bb721ff3-5a09-4eab-bee4-d904606f5136" /> |

<br><br>

### 체험장 탐색
지역을 선택하여 체험장을 탐색할 수 있습니다.

| 기능 | 화면 |
| :--- | :--- |
| **체험장 탐색** | <img width="200" alt="체험장 탐색2" src="https://github.com/user-attachments/assets/6ce2098b-881f-412f-982f-8afe8e09a246" /> <img width="200" alt="체험장 탐색3" src="https://github.com/user-attachments/assets/fc74d62c-ed54-4a2c-8b12-e2eb4279aceb" /> <img width="200" alt="체험장 탐색4" src="https://github.com/user-attachments/assets/408d9004-7b8a-4939-9233-cc63e0849b8a" /> |

## 회원 기능
회원가입, 회원탈퇴, 로그인, 마이 페이지 등

| 기능 | 화면 |
| :--- | :--- |
| **마이 페이지** | <img width="200" alt="마이페이지" src="https://github.com/user-attachments/assets/70a569b0-ea62-42a8-9ca3-738f51b10f27" /> <img width="200" alt="프로필 정보 수정" src="https://github.com/user-attachments/assets/40425541-7195-4709-8005-ed400f845a11" /> |
| **로그인** | <img width="200" alt="로그인화면" src="https://github.com/user-attachments/assets/cfcbd0b5-3a3d-490e-8f72-f30823f8a0bb" /> <img width="200" alt="로그인화면1" src="https://github.com/user-attachments/assets/0fc078be-6b18-4f6a-aff9-ebd03b18a9f3" /> |
| **회원 가입** | <img width="200" alt="회원가입 화면" src="https://github.com/user-attachments/assets/0f3a3bee-3adb-463a-91c7-7030be41c6bc" /> <img width="200" alt="회원가입 화면2" src="https://github.com/user-attachments/assets/2914882c-f476-446b-936a-55acb62657f4" /> <img width="200" alt="회원가입 화면1" src="https://github.com/user-attachments/assets/f09607d6-1a91-4c2a-8b08-6725d7609af6" />  <img width="200" alt="회원가입 완료 페이지" src="https://github.com/user-attachments/assets/8c5277d8-65cb-4aeb-8895-f88ed4e9c184" /> |
| **회원 탈퇴** | <img width="200" alt="탈퇴하기" src="https://github.com/user-attachments/assets/6e359247-da9f-4229-bb65-66d71e26910d" /> <img width="200" alt="탈퇴하기1" src="https://github.com/user-attachments/assets/0bdd6f08-c81d-4481-ae45-0a3528bf3506" /> <img width="200" alt="탈퇴하기2" src="https://github.com/user-attachments/assets/3b82e918-f6a4-4e89-9ef0-5fea1d10727e" />|

