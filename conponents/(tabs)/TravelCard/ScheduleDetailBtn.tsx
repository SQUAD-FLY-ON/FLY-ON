import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RightArrow from "./icons/RightArrow";
import { MainGradient } from "../../LinearGradients/MainGradient";

const ScheduleDetailBtn = () => {
  return (
    <MainGradient style={styles.gradient}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>일정보기</Text>
        <RightArrow />
      </TouchableOpacity>
    </MainGradient>
  );
};

export default ScheduleDetailBtn;

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 100,
  },
  button: {
    width: "auto",
    height: 34,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 100,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 400,
  },
});
