import 'dotenv/config'; // .env 파일의 환경 변수를 로드합니다.

export default {
  expo: {
    name: "FlyOn-frontend",
    slug: "FlyOn-frontend",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "flyonfrontend",
    userInterfaceStyle: "automatic",
    newArchEnabled: true, // New Architecture 활성화
    ios: {
      supportsTablet: true,
      // iOS Google Maps API 키를 .env 파일에서 가져옵니다.
      // app.json의 "iosGoogleMapsApiKey": "AIzaSyAHJwvnyDvni2n2wNO908ccmCoQ0lIGPOg" 대신 사용
    },
    android: {
      package: "com.flyon",
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      // Android Google Maps API 키를 .env 파일에서 가져옵니다.
      // app.json의 "androidGoogleMapsApiKey": "AIzaSyAEednpT8uKGFFVpYEuZazMy2ZGHzfdsJo" 대신 사용
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ],
      // react-native-maps 플러그인에서 API 키를 제거합니다.
      // 대신 ios.config.googleMapsApiKey 및 android.config.googleMaps.apiKey를 사용합니다.
      [
        "react-native-maps",
        {
          "iosGoogleMapsApiKey": process.env.GOOGLE_MAPS_IOS_API_KEY,
          "androidGoogleMapsApiKey": process.env.GOOGLE_MAPS_ANDROID_API_KEY,
        }
      ],
      "expo-font"
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      router: {},
      eas: {
        projectId: "c82afcfb-f95e-456e-b9e8-0df6bea8d5eb"
      },
      googleMapsIosApiKey: process.env.GOOGLE_MAPS_IOS_API_KEY,
      googleMapsAndroidApiKey: process.env.GOOGLE_MAPS_ANDROID_API_KEY,
      CESIUM_TOKEN: process.env.CESIUM_TOKEN,
      CESIUM_WEB_URL: process.env.CESIUM_WEB_URL,
    }
  }
};
