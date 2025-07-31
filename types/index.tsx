import { LatLng } from "react-native-maps";

export type pageRoutes = 'home' | 'explore' | 'user' | 'community' | 'schedule' | 'air';

export type activityArea = {
  id: number;
  image: ReturnType<typeof require>; // require 함수 반환 타입
  title: string;
  score: number;
  reviews: number;
};

export type selectedRegion = { key:string; name: string; coordinates: LatLng[] }
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
