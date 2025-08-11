import { LatLng } from "react-native-maps";

export type pageRoutes = 'home' | 'explore' | 'user' | 'community' | 'schedule' | 'air';

export type activityArea = {
  id: number;
  image: ReturnType<typeof require>; // require 함수 반환 타입
  title: string;
  score: number;
  reviews: number;
};
export type Plan = {
  key: string,
  type: string;
  image: any;
  place: string;
  address: string;
}

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

export type selectedRegion = { key: "" | RegionCode; name: string; coordinates: LatLng[] }
export type ScreenKey = "SelectDate" | "SelectAreaRegion" | "SelectSubRegion" | "SelectPlace1" | "SelectPlace2" | "LoadingGenerateSchedule" | "AIRecommendPlan" | "EditPlan"
export type ScreenItem = {
  key: ScreenKey;
  label: string;
  step: number;
  description?: string; // description은 선택 사항이므로 ?를 붙입니다.
};

type WeatherStatus = 'sunny' | 'partlyCloudy' | 'cloudy' | 'overcast' | 'rainy' | 'sleet' | 'snowy';

export type Weather = {
  date: string;
  minTemp: number;
  maxTemp: number;
  weatherStatus: WeatherStatus;
}

export type subRegionApiData = {
  number: number;
  name: string;
  weathers: Weather[],
  distance: number;
}

export type province = 
  | 'gyeonggi'
  | 'gangwon'
  | 'gyeoungsangbuk'
  | 'gyeoungsangnam'
  | 'jeollabuk'
  | 'jeollanam'
  | 'jeju'
  | 'jellanam'
  | 'chungcheongbuk';