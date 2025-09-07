import { useRef } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";
import { WebView as WebViewType } from "react-native-webview";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import SpotCard from "@/conponents/(tabs)/explore/SpotCard";

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
      <View style={styles.webveiwContainer}>
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
        <LinearGradient
          colors={["rgba(245, 245, 245, 0)", "#F5F5F5"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          locations={[0, 0.3886]} // 0% ~ 38.86%
          style={styles.gradient}
        />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>양평 패러리브 패러글라이딩</Text>
          <View style={styles.scoreContainer}>
            <Image
              source={require("@/assets/images/star.png")}
              style={styles.star}
            />
            <Text style={styles.score}>4.9</Text>
            <Text style={styles.review}>(19)</Text>
          </View>
        </View>
        <SpotCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webveiwContainer: {
    height: 549,
    width: "100%",
  },
  webview: {
    flex: 1,
    zIndex: -3,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 14,
    position: "absolute",
    bottom: 40,
    width: "100%",
    height: 300,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    marginBottom: 16,
  },
  title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 24,
  },
  scoreContainer: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    width: 18,
    height: 18,
    marginRight: -3,
  },
  score: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 14,
  },
  review: {
    fontFamily: "Pretendard-Regular",
    fontSize: 14,
    color: "#8E9297",
  },
});
