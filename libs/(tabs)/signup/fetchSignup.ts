import { apiClient } from "@/api/apiClient";
import { ApiResponse, SignupRequest } from "@/types/api";

/**
 * 회원가입 API
 * @returns 성공 시 response 반환, 실패 시 빈 배열 반환 및 알림
 */
export async function fetchSignup(request: SignupRequest): Promise<any> {
  try {
    console.log(process.env.EXPO_PUBLIC_API_URL);
    const response: ApiResponse<any> = await apiClient.post(
      "/members",
      request,
      { headers: { "Content-Type": "application/json" } }
    );
    return response;
  } catch (error) {
    console.log("❌ 회원가입 실패:", error.response);
    return []; // 실패 시 기본값 반환
  }
}
