import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/api/apiClient";
import { ApiResponse } from "@/types/api";
import { Alert } from "react-native";
import { useAuthStore } from "@/store/useAuthStore";
import { TourismScheduleData } from "@/types";

const memberId = useAuthStore.getState().memberInfo?.memberId;

export async function fetchTourSchedule(): Promise<any> {
  try {
    const response: ApiResponse<TourismScheduleData> = await apiClient.get(
      `/tourism-schedule`,
      {
        params: { memberId },
      }
    );
    return response.data.tourismSchedules;
  } catch (error) {
    console.log("❌ 여행 일정 조회실패:", error);
    Alert.alert("여행 일정 조회에 실패하였습니다. 다시 시도해주세요.");
    return [];
  }
}

export const useTourSchedule = () => {
  const {
    isLoading: isScheduleLoading,
    isError: isScheduleError,
    data: schedule,
    isSuccess,
  } = useQuery({
    queryKey: ["mySchedule"],
    queryFn: fetchTourSchedule,
  });

  return { isScheduleLoading, isScheduleError, schedule, isSuccess };
};
