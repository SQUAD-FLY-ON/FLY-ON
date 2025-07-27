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