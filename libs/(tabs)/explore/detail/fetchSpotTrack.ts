import { apiClient } from "@/api/apiClient";
import { ITrackData, ITrackPoints } from "@/types";
import { ApiResponse } from "@/types/api";

/**
 * 체험장 상세 정보 조회 API
 * @returns 성공 시 ITrackData[] 반환, 실패 시 null 반환
 */
export async function fetchSpotTrack(
  spotId: string
): Promise<ITrackData[] | null> {
  try {
    const response: ApiResponse<ITrackPoints> = await apiClient.get(
      `/flight-logs/${spotId}/track`,
      {
        params: { paraglidingSpotId: spotId },
      }
    );
    return response.data.points;
  } catch (error) {
    console.log("❌ 패러글라이딩 스팟 조회 실패:", error);
    return null;
  }
}
