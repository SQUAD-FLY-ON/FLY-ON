// 기본 색상과 선택된 색상
export const defaultStrokeColor = '#000000';
export const selectedFillColor = '#78b9fb';
export const flyOffFillColor = '#E5E5E4';
export const flyOnFillColor = '#C3ECFF'
export const customMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": `${flyOffFillColor}`
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
        "color": "#F7F7F7"
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

export const koreaRegion = { "latitude": 35.84865455207799, "latitudeDelta": 5.486573594370739, "longitude": 127.60108854621649, "longitudeDelta": 5.225738435983658 };