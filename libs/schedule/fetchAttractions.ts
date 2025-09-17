import { apiClient } from "@/api/apiClient";
import { ApiResponse, TourismRequest, TourismResponse } from "@/types/api";

export async function fetchAttractions(request: TourismRequest) {
  const response: ApiResponse<TourismResponse> = await apiClient.get('/tourism/attractions',{params:request});
  console.log('response',response);
  return response.data.content;

}