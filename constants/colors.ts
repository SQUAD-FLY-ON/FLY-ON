import { ColorValue } from "react-native";

const Colors = {
  main: "#3A88F4",
  mainGradation: {
    angle: 139,
    colors: ["#3A88F4", "#84B8FF"] as [ColorValue, ColorValue],
    locations: [0.1483, 1] as [number, number], // 14.83%, 100%
  },
  mainBackgroundGradation: {
    angle: 180,
    colors: ["#EAF2FC", "#FFF"] as [ColorValue, ColorValue],
    locations: [0.7981, 1] as [number, number], // 79.81%, 100%
  },
};

export default Colors;
