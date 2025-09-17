import { apiClient } from "@/api/apiClient";
import { useAuthStore } from "@/store/useAuthStore";
import { Alert } from "react-native";

export default async function extractTourNames(): Promise<string[]> {
  try {
    const memberId = useAuthStore.getState().memberInfo?.memberId;
    const response = await apiClient.get("/tourism-schedule", {
      params: { memberId },
    });

    const schedules = response.data.tourismSchedules;
    // const schedules = mockSchedule;
    const result: string[] = [];
    for (const schedule of schedules) {
      if (schedule.dailyTourismSpots) {
        const flatSpots = schedule.dailyTourismSpots.flat();

        for (const spot of flatSpots) {
          if (spot.name.includes("패러글라이딩")) {
            result.push(spot.name);
            break;
          }
        }
      }
    }

    return result;
  } catch (error) {
    console.error("여행 일정 불러오기 오류: ", error);
    Alert.alert("여행 일정을 불러오기 중 오류가 발생했습니다!");
    return [];
  }
}
