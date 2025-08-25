import Header from "@/conponents/Header";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("@/assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-Regular": require("@/assets/fonts/Pretendard-Regular.ttf"),
    "Pretendard-SemiBold": require("@/assets/fonts/Pretendard-SemiBold.ttf"),
    "Pretendard-Medium": require("@/assets/fonts/Pretendard-Medium.ttf"),
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <Stack>
              <Stack.Protected guard={false}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              </Stack.Protected>
              <Stack.Protected guard={true} >
                <Stack.Screen name="intro" options={{ headerShown: false }} />
                <Stack.Screen name="login"  options={{ header: () => <Header title="로그인"/>}}/>
                <Stack.Screen name="signup" options={{ header: () => <Header title="회원가입"/>}}/>
              </Stack.Protected>
            </Stack>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
