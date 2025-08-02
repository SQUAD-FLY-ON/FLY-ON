import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    CESIUM_TOKEN: process.env.CESIUM_TOKEN,
    CESIUM_WEB_URL: process.env.CESIUM_WEB_URL,
  },
});
