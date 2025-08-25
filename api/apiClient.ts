import axios from "axios";

/**
 * Axios 클라이언트 인스턴스
 *
 * - `baseURL`은 환경변수 `EXPO_PUBLIC_API_URL`에서 불러옵니다.
 * - 주소에서 `api` 뒤에 url부터 입력합니다 (ex) https://xxxx/api/users -> '/users'
 *
 * 사용 예시:
 * ```ts
 * const res = await apiClient.get('/users');
 * ```
 */
export const apiClient = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
});
apiClient.interceptors.request.use((config) => {
  console.log("REQUEST:", config);
  return config;
});

apiClient.interceptors.response.use((response) => {
  console.log("RESPONSE:", response);

  // response.data가 존재하지 않거나 비어있을 경우 (예: null, undefined)
  if (!response.data) {
    return response;
  }
  
  // 그 외의 경우 (데이터가 존재할 경우)
  return response.data;
});
// TO-DO 로그인 이후 accessToken 추가
// 요청 인터셉터 추가
// apiClient.interceptors.request.use(
//  async (config) => {
//     const token = useAuthStore.getState().accessToken; // 직접 access
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );