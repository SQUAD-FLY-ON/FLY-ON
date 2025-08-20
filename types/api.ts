// types/api.ts
export interface ApiResponse<T> {
  httpStatusCode: number;
  httpStatusMessage: string;
  data: T
}

export interface MarkerSpotApiRequest {
  centerLatitude: number;
  centerLongitude: number;
  cornerLatitude: number;
  cornerLongitude: number;
}