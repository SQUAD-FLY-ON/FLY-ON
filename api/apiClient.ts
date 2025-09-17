import axios from 'axios';
import { Alert } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';

export const apiClient = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
  timeout: 10000,
});

// Request 인터셉터
apiClient.interceptors.request.use(
  async (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    if (!response.data || !response.data.httpStatusCode) {
        return response;
      }
      return response.data;
  },
  async (error) => {
    if (error.response?.data?.serverErrorMessage) {
      Alert.alert('오류', error.response.data.serverErrorMessage);
    } else {
      Alert.alert('오류', '데이터 요청에 실패했습니다.');
    }

    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshed = await useAuthStore.getState().refreshAccessToken();
      if (refreshed) {
        const token = useAuthStore.getState().accessToken;
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return apiClient(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);
