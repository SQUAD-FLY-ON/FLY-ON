import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";

export default function CesiumView() {
  const token = process.env.EXPO_PUBLIC_CESIUM_TOKEN;
  const { height, width } = Dimensions.get("window");

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Cesium Viewer</title>
      <script src="https://cesium.com/downloads/cesiumjs/releases/1.84/Build/Cesium/Cesium.js"></script>
      <link href="https://cesium.com/downloads/cesiumjs/releases/1.84/Build/Cesium/Widgets/widgets.css" rel="stylesheet" />
      <style>
        html, body, #cesiumContainer {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        canvas {
          display: block;
        }
      </style>
    </head>
    <body>
      <div id="cesiumContainer"></div>
      <script>
        Cesium.Ion.defaultAccessToken = "${token}";

        const viewer = new Cesium.Viewer('cesiumContainer', {
          terrainProvider: Cesium.createWorldTerrain(),
          animation: false,
          timeline: false,
          baseLayerPicker: false,
          sceneModePicker: false,
          navigationHelpButton: false,
          fullscreenButton: false
        });

        // 카메라 중앙 확대 시점
        viewer.scene.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(
            129.040227,   // 경도 (예: 부산 중심)
            35.115840,    // 위도
            300           // 고도 ↓ 낮을수록 더 확대
          ),
          orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-25.0),
            roll: 0.0
          }
        });
      </script>
    </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={["*"]}
      source={{ html: htmlContent }}
      javaScriptEnabled
      domStorageEnabled
      style={{ height }}
    />
  );
}
