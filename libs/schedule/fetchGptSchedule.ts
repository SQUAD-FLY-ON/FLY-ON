import { apiClient } from "@/api/apiClient";
import { ApiResponse, GptScheduleRequest, ScheduleResponse } from "@/types/api";

export async function fetchGptSchedule(request: GptScheduleRequest) {
  const response: ApiResponse<ScheduleResponse> = await apiClient.post('/tourism-schedule/gpt', request);
  return response.data.schedules;

}