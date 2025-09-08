import { RegionName, Schedules, TourismItem, WeatherInfo, RecommendSpotCreteria, RecommendSpots, RegionName, } from ".";
// types/api.ts
export interface ApiResponse<T> {
  httpStatusCode: number;
  httpStatusMessage: string;
  data: T
}

export interface RecommendSpotsRequest {
  criteria: RecommendSpotCreteria;
  latitude: number;
  longitude: number;
}

export interface RecommendSpotsResponse {
  recommendSpotList: RecommendSpots[];
}

export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface SignupRequest {
  nickname: string;
  loginId: string;
  password: string;
  oauthProviderType?: 'KAKAO' | 'GOOGLE' | 'NAVER'; // 소셜 로그인 타입은 선택 사항이고, 특정 값만 허용하도록 지정
}

export interface WeatherRequest {
  sido: RegionName;
  tripStart: string;
  tripEnd: string;
}

export interface WeatherResponse {
  weatherInfos: WeatherInfo[];
}



export interface TourismResponse {
  schedules: any[];
}
export interface TourismRequest {
  lat: number;
  lon: number;
}

export interface SpotRequest {
  centerLatitude: number;
  centerLongitude: number;
  cornerLatitude: number;
  cornerLongitude: number;
}

export interface GptScheduleRequest {
  tourismSpotList: TourismItem[];
  paraglidingSpotId: number;
  scheduleStart: string;
  scheduleEnd: string;
}

export interface AddScheduleRequest {
  schedules: Schedules;
  scheduleStart: string;
  scheduleEnd: string;
}
export interface RecommendSpotsResponse {
  recommendSpotList: TourismItem[];

}

export interface ScheduleResponse {
  schedules: Schedules;
}