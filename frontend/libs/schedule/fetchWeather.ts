import { apiClient } from "@/api/apiClient";
import { ApiResponse, WeatherRequest, WeatherResponse } from "@/types/api";

export async function fetchWeather(request: WeatherRequest) {
  const response: ApiResponse<WeatherResponse> = await apiClient.get('/weather',{params:request});
  return response.data.weatherInfos;

}