import { apiClient } from "@/api/apiClient";
import { ApiResponse, SignupRequest } from "@/types/api";

/**
 * 패러글라이딩 스팟 목록 조회 API
 * @returns 성공 시 Place[] 반환, 실패 시 빈 배열 반환
 */
export async function fetchSignup(request: SignupRequest): Promise<any> {
  try {
    const response: ApiResponse<any> = await apiClient.post("/members", request);
    return response;
  } catch (error) {
    console.log("❌ 패러글라이딩 스팟 조회 실패:", error);
    return []; // 실패 시 기본값 반환
  }
}
