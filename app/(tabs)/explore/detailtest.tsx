import CesiumView from "@/conponents/(tabs)/explore/CesiumView";
import { useEffect, useRef } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { WebView as WebViewType } from "react-native-webview";
import Constants from "expo-constants";

export default function Detail() {
  const webviewRef = useRef<WebViewType>(null);

  const { CESIUM_TOKEN, CESIUM_WEB_URL } = Constants?.expoConfig?.extra as {
    CESIUM_TOKEN: string;
    CESIUM_WEB_URL: string;
  };

  if (!CESIUM_WEB_URL) {
    throw new Error("CESIUM_WEB_URL이 설정되지 않았습니다");
  }

  const cesiumAccessToken = CESIUM_TOKEN;

  const sendFlightData = () => {
    const flightPath = [
      { lat: 37.5, lon: 128.2, alt: 1000 },
      { lat: 37.51, lon: 128.21, alt: 900 },
      { lat: 37.52, lon: 128.22, alt: 700 },
      { lat: 37.53, lon: 128.23, alt: 300 },
    ];

    const message = {
      type: "SET_FLIGHT",
      flightPath,
    };

    webviewRef.current?.postMessage(JSON.stringify(message));
  };

  const handleWebViewLoad = () => {
    const message = JSON.stringify({
      type: "SET_TOKEN",
      token: cesiumAccessToken,
    });
    webviewRef.current?.postMessage(message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <Button title="▶ 시뮬레이션 실행" onPress={sendFlightData} />
      </View>
      <WebView
        ref={webviewRef}
        source={{
          uri: CESIUM_WEB_URL,
        }}
        javaScriptEnabled={true}
        originWhitelist={["*"]}
        style={styles.webview}
        onLoadEnd={handleWebViewLoad}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
  buttons: {
    padding: 10,
    backgroundColor: "#fff",
    zIndex: 10,
  },
});
