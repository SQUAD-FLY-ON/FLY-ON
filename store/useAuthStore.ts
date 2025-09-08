import { apiClient } from "@/api/apiClient";
import { AuthResponse, MemberInfo } from "@/types";
import { ApiResponse, LoginRequest } from "@/types/api";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const storage = {
  getItem: async (name: string): Promise<string | null> => {
    return await SecureStore.getItemAsync(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await SecureStore.deleteItemAsync(name);
  },
};

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  memberInfo: MemberInfo | null;
  accessToken: string | null;
  refreshToken: string | null;
}

interface AuthActions {
  login: (
    credentials: LoginRequest
  ) => Promise<{ success: boolean; error?: any }>;
  logout: () => Promise<void>;
  refreshAccessToken: () => Promise<boolean>; // ✅ 메서드 이름 변경
  clearAuthState: () => void;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      isLoading: false,
      isInitialized: false,
      memberInfo: null,
      accessToken: null,
      refreshToken: null,
      initializeAuth: async () => {
        const { accessToken, refreshToken } = get();
        console.log(accessToken, refreshToken);
        if (!accessToken || !refreshToken) {
          set({ isInitialized: true });
          return;
        }

        set({ isLoading: true });

        try {
          // 액세스 토큰 유효성 검사 (예: 사용자 정보 요청)
          const userResponse = await apiClient.get("/members");
          if (userResponse.httpStatusCode === 200) {
            console.log(userResponse);

            set({
              isAuthenticated: true,
              memberInfo: userResponse.data || get().memberInfo,
              isInitialized: true,
              isLoading: false,
            });
            return;
          }
        } catch (error: any) {
          console.log("액세스 토큰 만료, 토큰 갱신 시도...");

          // 액세스 토큰이 만료된 경우, 리프레시 토큰으로 갱신 시도
          const refreshSuccess = await get().refreshAccessToken();
          console.log(refreshSuccess);
          if (refreshSuccess) {
            set({
              isAuthenticated: true,
              isInitialized: true,
              isLoading: false,
            });
          } else {
            // 리프레시 토큰도 만료된 경우
            get().clearAuthState();
            set({
              isInitialized: true,
              isLoading: false,
            });
          }
        }
      },
      login: async (credentials) => {
        set({ isLoading: true });
        try {
          const response: ApiResponse<AuthResponse> = await apiClient.post(
            "/auth",
            credentials
          );
          if (response.httpStatusCode === 200 && response.data) {
            const { accessToken, refreshToken, memberInfo } = response.data;

            set({
              isAuthenticated: true,
              accessToken,
              refreshToken,
              memberInfo: memberInfo || null,
            });

            return { success: true };
          } else {
            return {
              success: false,
              error: response.httpStatusMessage || "Login failed",
            };
          }
        } catch (error: any) {
          console.error("로그인 실패:", error);
          Alert.alert("아이디 혹은 비밀번호가 올바르지 않습니다.");
          return {
            success: false,
            error:
              error.response?.data?.message || error.message || "Network error",
          };
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          const refreshToken = get().refreshToken;
          if (refreshToken) {
            await apiClient
              .delete("/tokens", { data: { refreshToken } })
              .catch((error) => {
                console.warn("서버 로그아웃 요청 실패:", error);
              });
          }
        } catch (error) {
          console.error("로그아웃 중 오류:", error);
        } finally {
          get().clearAuthState();
          set({ isLoading: false });
        }
      },

      refreshAccessToken: async () => {
        try {
          const refreshToken = get().refreshToken;
          if (!refreshToken) {
            get().clearAuthState();
            return false;
          }
          const response: ApiResponse<AuthResponse> = await apiClient.post(
            "/tokens",
            {
              refreshToken,
            }
          );
          if (response.httpStatusCode === 201 && response.data) {
            const {
              accessToken,
              refreshToken: newRefreshToken,
              memberInfo,
            } = response.data;

            set({
              isAuthenticated: true,
              accessToken,
              refreshToken: newRefreshToken || refreshToken,
              memberInfo: memberInfo || get().memberInfo,
            });

            return true;
          } else {
            return false;
          }
        } catch (error: any) {
          console.error("토큰 갱신 실패:", error);
          return false;
        }
      },
      clearAuthState: () => {
        set({
          isAuthenticated: false,
          accessToken: null,
          refreshToken: null,
          memberInfo: null,
        });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => storage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        memberInfo: state.memberInfo,
      }),
    }
  )
);
