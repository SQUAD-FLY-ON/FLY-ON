import { apiClient } from "@/api/apiClient";
import { ApiResponse } from "@/types/api";
import { Alert } from "react-native";

export async function fetchTourSchedule(): Promise<any> {

  try {
    const response: ApiResponse<any> = await apiClient.get(
      `/tourism-schedule`
    );
    return response;
  } catch (error) {
    console.log("❌ 회원정보 조회실패:", error);
    Alert.alert("회원정보 조회에 실패하였습니다. 다시 시도해주세요.");
    return [];
  }
}
