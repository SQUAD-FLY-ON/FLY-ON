  // 기본 색상과 선택된 색상
export const defaultStrokeColor = '#000000';
export const defaultFillColor = '#c4edff'
export const selectedFillColor = '#78b9fb'; // 선택시 빨간색

export const customMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e4e4e4" // 지도 배경색 (땅)을 #84B8FF으로
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off" // 아이콘 숨기기
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#bdbdbd" // 경계선 색상 (선택 사항)
      }
    ]
  },
  {
    "featureType": "poi", // 관심 지점
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off" // 모든 POI 숨기기
      }
    ]
  },
  {
    "featureType": "road", // 도로
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff" // 도로 색상 (배경과 비슷하게)
      },
      {
        "visibility": "off" // 도로 숨기기
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off" // 로컬 도로 숨기기
      }
    ]
  },
  {
    "featureType": "transit", // 대중교통
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off" // 대중교통 관련 모든 요소 숨기기
      }
    ]
  },
  {
    "featureType": "water", // 물
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#FFFFFF" // 물 색상을 하얀색으로 변경
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off" // 모든 텍스트 라벨 숨기기 (지역명, 도로명 등 포함)
      }
    ]
  }
];

export const koreaRegion = {
    latitude: 35.519406,
    latitudeDelta: 6.464262,
    longitude: 127.668015,
    longitudeDelta: 3.946106,
  };