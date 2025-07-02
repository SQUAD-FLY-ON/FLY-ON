import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { MainGradient } from "../../../LinearGradients/MainGradient";
import RightArrow from "./icons/RightArrow";

const ScheduleDetailBtn = ({ style }: { style?: ViewStyle }) => {
  return (
    <TouchableOpacity style={[style, styles.button]} onPress={() => {}}>
      <MainGradient style={styles.gradient}>
        <Text style={styles.text}>일정보기</Text>
        <RightArrow />
      </MainGradient>
    </TouchableOpacity>
  );
};

export default ScheduleDetailBtn;

const styles = StyleSheet.create({
  button: {
    width: "auto",
    height: 34,
    borderRadius: 100,
  },
  gradient: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 400,
    marginRight: 4,
  },
});
