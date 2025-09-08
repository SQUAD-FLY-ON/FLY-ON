import { apiClient } from "@/api/apiClient";
import { AddScheduleRequest } from "@/types/api";

// fetchAddSchedule.js
export async function fetchAddSchedule(request: AddScheduleRequest) {
  const response = await apiClient.post('/tourism-schedule', request);
  return response;
}