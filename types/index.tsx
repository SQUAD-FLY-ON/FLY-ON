import { LatLng } from "react-native-maps";

export type pageRoutes = 'home' | 'explore' | 'user' | 'community' | 'schedule' | 'air';

export type activityArea = {
  id: number;
  image: ReturnType<typeof require>; // require 함수 반환 타입
  title: string;
  score: number;
  reviews: number;
};

export type GeoJSONCoordinates = number[][][] | number[][][][];

export type Region = {
  geometry: {
    coordinates: GeoJSONCoordinates;
    type: string;
  };
  properties: {
    CTPRVN_CD: string;
    CTP_KOR_NM: string;
  };
};

export type RegionCode =
  | "11"
  | "26"
  | "27"
  | "29"
  | "30"
  | "31"
  | "41"
  | "42"
  | "43"
  | "44"
  | "45"
  | "46"
  | "47"
  | "48"
  | "50";

  export type RegionName =
  | "서울특별시"
  | "부산광역시"
  | "대구광역시"
  | "광주광역시"
  | "대전광역시"
  | "울산광역시"
  | "경기도"
  | "강원도"
  | "충청북도"
  | "충청남도"
  | "전라북도"
  | "전라남도"
  | "경상북도"
  | "경상남도"
  | "제주특별자치도";

  export type selectedRegion = { key:"" | RegionCode; name: string; coordinates: LatLng[] }
