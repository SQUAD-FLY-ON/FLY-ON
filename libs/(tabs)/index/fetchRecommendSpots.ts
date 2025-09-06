import { apiClient } from "@/api/apiClient";
import { ApiResponse, RecommendSpotsRequest, RecommendSpotsResponse, } from "@/types/api";

export async function fetchRecommendSpots(request: RecommendSpotsRequest) {
  const response: ApiResponse<RecommendSpotsResponse> = await apiClient.get('/paragliding-spot/recommend',{params: request});
  return response.data.recommendSpotList;

}