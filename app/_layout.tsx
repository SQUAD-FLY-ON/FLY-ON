import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient()
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("@/assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-Regular": require("@/assets/fonts/Pretendard-Regular.ttf"),
    "Pretendard-SemiBold": require("@/assets/fonts/Pretendard-SemiBold.ttf"),
    "Pretendard-Medium": require("@/assets/fonts/Pretendard-Medium.ttf"),
  });
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
