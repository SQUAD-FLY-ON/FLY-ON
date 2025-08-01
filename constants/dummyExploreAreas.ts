import { RegionCode } from "@/types";

// regionCode를 키로 하는 지역별 마커 데이터
export const markersByRegion = {
  // 서울특별시 (11)
  "11": [
    { id: 1, regionCode: "11", regionName: "서울특별시", latitude: 37.566, longitude: 126.978, title: "강남구 카페", category: "음식점" },
    { id: 2, regionCode: "11", regionName: "서울특별시", latitude: 37.583, longitude: 126.997, title: "종로구 서점", category: "문화시설" },
    { id: 3, regionCode: "11", regionName: "서울특별시", latitude: 37.545, longitude: 126.965, title: "용산구 박물관", category: "문화시설" },
    { id: 4, regionCode: "11", regionName: "서울특별시", latitude: 37.598, longitude: 127.058, title: "성동구 공원", category: "공원" },
    { id: 5, regionCode: "11", regionName: "서울특별시", latitude: 37.526, longitude: 127.024, title: "서초구 병원", category: "의료시설" },
    { id: 6, regionCode: "11", regionName: "서울특별시", latitude: 37.608, longitude: 126.932, title: "마포구 레스토랑", category: "음식점" },
    { id: 7, regionCode: "11", regionName: "서울특별시", latitude: 37.639, longitude: 127.025, title: "노원구 쇼핑몰", category: "쇼핑" },
    { id: 8, regionCode: "11", regionName: "서울특별시", latitude: 37.478, longitude: 126.951, title: "관악구 학교", category: "교육시설" }
  ],

  // 부산광역시 (26)
  "26": [
    { id: 9, regionCode: "26", regionName: "부산광역시", latitude: 35.179, longitude: 129.076, title: "해운대 해수욕장", category: "관광지" },
    { id: 10, regionCode: "26", regionName: "부산광역시", latitude: 35.104, longitude: 129.032, title: "중구 시장", category: "쇼핑" },
    { id: 11, regionCode: "26", regionName: "부산광역시", latitude: 35.230, longitude: 129.084, title: "기장군 펜션", category: "숙박시설" },
    { id: 12, regionCode: "26", regionName: "부산광역시", latitude: 35.141, longitude: 129.116, title: "수영구 카페", category: "음식점" },
    { id: 13, regionCode: "26", regionName: "부산광역시", latitude: 35.096, longitude: 128.856, title: "강서구 공항", category: "교통시설" },
    { id: 14, regionCode: "26", regionName: "부산광역시", latitude: 35.157, longitude: 129.165, title: "남구 대학교", category: "교육시설" },
    { id: 15, regionCode: "26", regionName: "부산광역시", latitude: 35.204, longitude: 129.078, title: "동래구 온천", category: "관광지" },
    { id: 16, regionCode: "26", regionName: "부산광역시", latitude: 35.115, longitude: 129.040, title: "서구 병원", category: "의료시설" }
  ],

  // 대구광역시 (27)
  "27": [
    { id: 17, regionCode: "27", regionName: "대구광역시", latitude: 35.871, longitude: 128.601, title: "중구 백화점", category: "쇼핑" },
    { id: 18, regionCode: "27", regionName: "대구광역시", latitude: 35.825, longitude: 128.564, title: "서구 공원", category: "공원" },
    { id: 19, regionCode: "27", regionName: "대구광역시", latitude: 35.890, longitude: 128.638, title: "동구 전통시장", category: "쇼핑" },
    { id: 20, regionCode: "27", regionName: "대구광역시", latitude: 35.858, longitude: 128.530, title: "달서구 병원", category: "의료시설" },
    { id: 21, regionCode: "27", regionName: "대구광역시", latitude: 35.835, longitude: 128.725, title: "수성구 카페", category: "음식점" },
    { id: 22, regionCode: "27", regionName: "대구광역시", latitude: 35.905, longitude: 128.595, title: "북구 대학교", category: "교육시설" },
    { id: 23, regionCode: "27", regionName: "대구광역시", latitude: 35.848, longitude: 128.590, title: "남구 레스토랑", category: "음식점" },
    { id: 24, regionCode: "27", regionName: "대구광역시", latitude: 35.801, longitude: 128.477, title: "달성군 농장", category: "농업시설" }
  ],

  // 광주광역시 (29)
  "29": [
    { id: 25, regionCode: "29", regionName: "광주광역시", latitude: 35.160, longitude: 126.851, title: "동구 문화센터", category: "문화시설" },
    { id: 26, regionCode: "29", regionName: "광주광역시", latitude: 35.147, longitude: 126.920, title: "서구 병원", category: "의료시설" },
    { id: 27, regionCode: "29", regionName: "광주광역시", latitude: 35.180, longitude: 126.888, title: "남구 카페", category: "음식점" },
    { id: 28, regionCode: "29", regionName: "광주광역시", latitude: 35.194, longitude: 126.802, title: "북구 공원", category: "공원" },
    { id: 29, regionCode: "29", regionName: "광주광역시", latitude: 35.207, longitude: 126.929, title: "광산구 쇼핑몰", category: "쇼핑" },
    { id: 30, regionCode: "29", regionName: "광주광역시", latitude: 35.133, longitude: 126.845, title: "동구 대학교", category: "교육시설" },
    { id: 31, regionCode: "29", regionName: "광주광역시", latitude: 35.125, longitude: 126.912, title: "서구 레스토랑", category: "음식점" },
    { id: 32, regionCode: "29", regionName: "광주광역시", latitude: 35.171, longitude: 126.805, title: "북구 도서관", category: "문화시설" }
  ],

  // 대전광역시 (30)
  "30": [
    { id: 33, regionCode: "30", regionName: "대전광역시", latitude: 36.351, longitude: 127.385, title: "중구 시청", category: "공공시설" },
    { id: 34, regionCode: "30", regionName: "대전광역시", latitude: 36.367, longitude: 127.344, title: "동구 병원", category: "의료시설" },
    { id: 35, regionCode: "30", regionName: "대전광역시", latitude: 36.324, longitude: 127.423, title: "서구 카페", category: "음식점" },
    { id: 36, regionCode: "30", regionName: "대전광역시", latitude: 36.300, longitude: 127.387, title: "유성구 과학관", category: "문화시설" },
    { id: 37, regionCode: "30", regionName: "대전광역시", latitude: 36.397, longitude: 127.365, title: "대덕구 공원", category: "공원" },
    { id: 38, regionCode: "30", regionName: "대전광역시", latitude: 36.335, longitude: 127.405, title: "중구 백화점", category: "쇼핑" },
    { id: 39, regionCode: "30", regionName: "대전광역시", latitude: 36.278, longitude: 127.442, title: "유성구 대학교", category: "교육시설" },
    { id: 40, regionCode: "30", regionName: "대전광역시", latitude: 36.373, longitude: 127.325, title: "동구 전통시장", category: "쇼핑" }
  ],

  // 울산광역시 (31)
  "31": [
    { id: 41, regionCode: "31", regionName: "울산광역시", latitude: 35.539, longitude: 129.311, title: "중구 항구", category: "교통시설" },
    { id: 42, regionCode: "31", regionName: "울산광역시", latitude: 35.563, longitude: 129.264, title: "남구 공장", category: "산업시설" },
    { id: 43, regionCode: "31", regionName: "울산광역시", latitude: 35.582, longitude: 129.361, title: "동구 해수욕장", category: "관광지" },
    { id: 44, regionCode: "31", regionName: "울산광역시", latitude: 35.494, longitude: 129.423, title: "북구 산업단지", category: "산업시설" },
    { id: 45, regionCode: "31", regionName: "울산광역시", latitude: 35.517, longitude: 129.139, title: "울주군 계곡", category: "관광지" },
    { id: 46, regionCode: "31", regionName: "울산광역시", latitude: 35.545, longitude: 129.295, title: "중구 병원", category: "의료시설" },
    { id: 47, regionCode: "31", regionName: "울산광역시", latitude: 35.571, longitude: 129.334, title: "동구 카페", category: "음식점" },
    { id: 48, regionCode: "31", regionName: "울산광역시", latitude: 35.507, longitude: 129.282, title: "남구 쇼핑센터", category: "쇼핑" }
  ],

  // 경기도 (41)
  "41": [
    { id: 49, regionCode: "41", regionName: "경기도", latitude: 37.455, longitude: 126.705, title: "인천 송도", category: "관광지" },
    { id: 50, regionCode: "41", regionName: "경기도", latitude: 37.290, longitude: 127.008, title: "수원 화성", category: "문화시설" },
    { id: 51, regionCode: "41", regionName: "경기도", latitude: 37.638, longitude: 127.077, title: "의정부 공원", category: "공원" },
    { id: 52, regionCode: "41", regionName: "경기도", latitude: 37.201, longitude: 127.077, title: "성남 판교", category: "산업시설" },
    { id: 53, regionCode: "41", regionName: "경기도", latitude: 37.463, longitude: 126.633, title: "부천 영화관", category: "문화시설" },
    { id: 54, regionCode: "41", regionName: "경기도", latitude: 37.758, longitude: 127.134, title: "포천 관광지", category: "관광지" },
    { id: 55, regionCode: "41", regionName: "경기도", latitude: 37.106, longitude: 127.401, title: "이천 도자기", category: "문화시설" },
    { id: 56, regionCode: "41", regionName: "경기도", latitude: 37.741, longitude: 126.779, title: "파주 출판단지", category: "문화시설" },
    { id: 57, regionCode: "41", regionName: "경기도", latitude: 37.421, longitude: 127.125, title: "안양 평촌", category: "쇼핑" },
    { id: 58, regionCode: "41", regionName: "경기도", latitude: 37.324, longitude: 126.831, title: "안산 단원구", category: "산업시설" }
  ],

  // 강원도 (42)
  "42": [
    { id: 59, regionCode: "42", regionName: "강원도", latitude: 37.885, longitude: 127.730, title: "춘천 남이섬", category: "관광지" },
    { id: 60, regionCode: "42", regionName: "강원도", latitude: 37.555, longitude: 128.209, title: "강릉 경포대", category: "관광지" },
    { id: 61, regionCode: "42", regionName: "강원도", latitude: 37.165, longitude: 128.985, title: "동해 해수욕장", category: "관광지" },
    { id: 62, regionCode: "42", regionName: "강원도", latitude: 38.107, longitude: 128.594, title: "속초 설악산", category: "관광지" },
    { id: 63, regionCode: "42", regionName: "강원도", latitude: 37.337, longitude: 127.920, title: "원주 치악산", category: "관광지" },
    { id: 64, regionCode: "42", regionName: "강원도", latitude: 37.752, longitude: 128.876, title: "평창 용평", category: "관광지" },
    { id: 65, regionCode: "42", regionName: "강원도", latitude: 37.494, longitude: 129.116, title: "삼척 해안", category: "관광지" },
    { id: 66, regionCode: "42", regionName: "강원도", latitude: 38.204, longitude: 127.878, title: "철원 평야", category: "농업시설" }
  ],

  // 충청북도 (43)
  "43": [
    { id: 67, regionCode: "43", regionName: "충청북도", latitude: 36.637, longitude: 127.489, title: "청주 상당산성", category: "문화시설" },
    { id: 68, regionCode: "43", regionName: "충청북도", latitude: 36.970, longitude: 127.926, title: "충주 탄금대", category: "관광지" },
    { id: 69, regionCode: "43", regionName: "충청북도", latitude: 36.444, longitude: 128.161, title: "제천 청풍호", category: "관광지" },
    { id: 70, regionCode: "43", regionName: "충청북도", latitude: 36.789, longitude: 127.153, title: "진천 농업단지", category: "농업시설" },
    { id: 71, regionCode: "43", regionName: "충청북도", latitude: 37.161, longitude: 128.202, title: "단양 도담삼봉", category: "관광지" },
    { id: 72, regionCode: "43", regionName: "충청북도", latitude: 36.538, longitude: 127.872, title: "음성 맹동면", category: "농업시설" },
    { id: 73, regionCode: "43", regionName: "충청북도", latitude: 36.322, longitude: 127.521, title: "옥천 대청호", category: "관광지" },
    { id: 74, regionCode: "43", regionName: "충청북도", latitude: 36.894, longitude: 127.624, title: "괴산 산막이마을", category: "관광지" }
  ],

  // 충청남도 (44)
  "44": [
    { id: 75, regionCode: "44", regionName: "충청남도", latitude: 36.557, longitude: 126.779, title: "천안 독립기념관", category: "문화시설" },
    { id: 76, regionCode: "44", regionName: "충청남도", latitude: 36.804, longitude: 126.454, title: "당진 석문산업단지", category: "산업시설" },
    { id: 77, regionCode: "44", regionName: "충청남도", latitude: 36.351, longitude: 126.617, title: "공주 공산성", category: "문화시설" },
    { id: 78, regionCode: "44", regionName: "충청남도", latitude: 36.462, longitude: 126.391, title: "보령 대천해수욕장", category: "관광지" },
    { id: 79, regionCode: "44", regionName: "충청남도", latitude: 36.766, longitude: 126.841, title: "아산 온양온천", category: "관광지" },
    { id: 80, regionCode: "44", regionName: "충청남도", latitude: 36.244, longitude: 126.842, title: "부여 백제문화단지", category: "문화시설" },
    { id: 81, regionCode: "44", regionName: "충청남도", latitude: 36.890, longitude: 126.621, title: "서산 해미읍성", category: "문화시설" },
    { id: 82, regionCode: "44", regionName: "충청남도", latitude: 36.139, longitude: 126.543, title: "서천 국립생태원", category: "문화시설" }
  ],

  // 전라북도 (45)
  "45": [
    { id: 83, regionCode: "45", regionName: "전라북도", latitude: 35.825, longitude: 127.147, title: "전주 한옥마을", category: "관광지" },
    { id: 84, regionCode: "45", regionName: "전라북도", latitude: 35.948, longitude: 126.957, title: "익산 미륵사지", category: "문화시설" },
    { id: 85, regionCode: "45", regionName: "전라북도", latitude: 35.442, longitude: 126.705, title: "군산 근대역사박물관", category: "문화시설" },
    { id: 86, regionCode: "45", regionName: "전라북도", latitude: 35.966, longitude: 127.737, title: "무주 덕유산", category: "관광지" },
    { id: 87, regionCode: "45", regionName: "전라북도", latitude: 35.651, longitude: 127.488, title: "장수 장안산", category: "관광지" },
    { id: 88, regionCode: "45", regionName: "전라북도", latitude: 35.300, longitude: 126.881, title: "고창 고인돌", category: "문화시설" },
    { id: 89, regionCode: "45", regionName: "전라북도", latitude: 35.503, longitude: 127.119, title: "정읍 내장산", category: "관광지" },
    { id: 90, regionCode: "45", regionName: "전라북도", latitude: 35.715, longitude: 127.102, title: "완주 소양면", category: "농업시설" }
  ],

  // 전라남도 (46)
  "46": [
    { id: 91, regionCode: "46", regionName: "전라남도", latitude: 34.760, longitude: 126.463, title: "목포 유달산", category: "관광지" },
    { id: 92, regionCode: "46", regionName: "전라남도", latitude: 34.734, longitude: 127.687, title: "여수 오동도", category: "관광지" },
    { id: 93, regionCode: "46", regionName: "전라남도", latitude: 34.816, longitude: 126.891, title: "무안 국제공항", category: "교통시설" },
    { id: 94, regionCode: "46", regionName: "전라남도", latitude: 35.119, longitude: 126.832, title: "나주 금성관", category: "문화시설" },
    { id: 95, regionCode: "46", regionName: "전라남도", latitude: 34.574, longitude: 127.264, title: "순천 순천만", category: "관광지" },
    { id: 96, regionCode: "46", regionName: "전라남도", latitude: 34.611, longitude: 126.205, title: "진도 진도대교", category: "관광지" },
    { id: 97, regionCode: "46", regionName: "전라남도", latitude: 34.493, longitude: 126.756, title: "해남 대흥사", category: "문화시설" },
    { id: 98, regionCode: "46", regionName: "전라남도", latitude: 35.018, longitude: 127.386, title: "구례 화엄사", category: "문화시설" }
  ],

  // 경상북도 (47)
  "47": [
    { id: 99, regionCode: "47", regionName: "경상북도", latitude: 36.576, longitude: 128.505, title: "안동 하회마을", category: "문화시설" },
    { id: 100, regionCode: "47", regionName: "경상북도", latitude: 35.848, longitude: 129.224, title: "경주 불국사", category: "문화시설" },
    { id: 101, regionCode: "47", regionName: "경상북도", latitude: 36.032, longitude: 129.366, title: "포항 호미곶", category: "관광지" },
    { id: 102, regionCode: "47", regionName: "경상북도", latitude: 36.420, longitude: 128.868, title: "영주 부석사", category: "문화시설" },
    { id: 103, regionCode: "47", regionName: "경상북도", latitude: 36.968, longitude: 128.624, title: "봉화 청량산", category: "관광지" },
    { id: 104, regionCode: "47", regionName: "경상북도", latitude: 35.503, longitude: 129.314, title: "울진 불영사", category: "문화시설" },
    { id: 105, regionCode: "47", regionName: "경상북도", latitude: 36.305, longitude: 128.294, title: "문경 문경새재", category: "관광지" },
    { id: 106, regionCode: "47", regionName: "경상북도", latitude: 35.675, longitude: 128.612, title: "상주 상주박물관", category: "문화시설" }
  ],

  // 경상남도 (48)
  "48": [
    { id: 107, regionCode: "48", regionName: "경상남도", latitude: 35.228, longitude: 128.681, title: "창원 용지공원", category: "공원" },
    { id: 108, regionCode: "48", regionName: "경상남도", latitude: 35.237, longitude: 128.692, title: "마산 창동예술촌", category: "문화시설" },
    { id: 109, regionCode: "48", regionName: "경상남도", latitude: 34.856, longitude: 128.692, title: "진주 진주성", category: "문화시설" },
    { id: 110, regionCode: "48", regionName: "경상남도", latitude: 35.326, longitude: 129.181, title: "김해 수로왕릉", category: "문화시설" },
    { id: 111, regionCode: "48", regionName: "경상남도", latitude: 34.736, longitude: 128.264, title: "통영 동피랑마을", category: "관광지" },
    { id: 112, regionCode: "48", regionName: "경상남도", latitude: 34.846, longitude: 128.209, title: "고성 공룡박물관", category: "문화시설" },
    { id: 113, regionCode: "48", regionName: "경상남도", latitude: 35.176, longitude: 128.106, title: "함안 아라가야", category: "문화시설" },
    { id: 114, regionCode: "48", regionName: "경상남도", latitude: 35.062, longitude: 128.209, title: "의령 충익사", category: "문화시설" }
  ],

  // 제주특별자치도 (50)
  "50": [
    { id: 115, regionCode: "50", regionName: "제주특별자치도", latitude: 33.499, longitude: 126.531, title: "제주시 용두암", category: "관광지" },
    { id: 116, regionCode: "50", regionName: "제주특별자치도", latitude: 33.254, longitude: 126.408, title: "서귀포 천지연폭포", category: "관광지" },
    { id: 117, regionCode: "50", regionName: "제주특별자치도", latitude: 33.362, longitude: 126.529, title: "제주 한라산", category: "관광지" },
    { id: 118, regionCode: "50", regionName: "제주특별자치도", latitude: 33.244, longitude: 126.563, title: "서귀포 정방폭포", category: "관광지" },
    { id: 119, regionCode: "50", regionName: "제주특별자치도", latitude: 33.452, longitude: 126.943, title: "제주 성산일출봉", category: "관광지" },
    { id: 120, regionCode: "50", regionName: "제주특별자치도", latitude: 33.382, longitude: 126.160, title: "제주 협재해수욕장", category: "관광지" },
    { id: 121, regionCode: "50", regionName: "제주특별자치도", latitude: 33.311, longitude: 126.795, title: "서귀포 우도", category: "관광지" },
    { id: 122, regionCode: "50", regionName: "제주특별자치도", latitude: 33.489, longitude: 126.498, title: "제주 삼성혈", category: "문화시설" }
  ]
};

// 전체 마커 배열 (기존 호환성을 위해)
export const allMarkers = Object.values(markersByRegion).flat();

// 특정 지역 마커 가져오기 함수
export const getMarkersByRegion = (regionCode:RegionCode) => {
  return markersByRegion[regionCode] || [];
};