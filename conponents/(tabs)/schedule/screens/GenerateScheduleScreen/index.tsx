import LoadingComponent from "@/conponents/LoadingComponent";
import { useScheduleStore } from "@/store/useScheduleStore";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomAnimationSection from "./BottomAnimation";
import GreenWaveSvg from "./GreenWaveSvg";

export default function GenerateScheduleScreen() {
  const gotoNextStep = useScheduleStore(state => state.goToNextStep);
  setTimeout(() => {
    gotoNextStep();
  }, 1000)
  return (<View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={[styles.text, { marginTop: 72 }]}>선택한 장소를 기반으로</Text>
      <Text style={styles.text}>여행계획을 세우는 중이에요</Text>
      <LoadingComponent />
    </View>
    <BottomAnimationSection />
    <GreenWaveSvg style={styles.topEllipse} />
  </View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: -16,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Pretendard',
    fontWeight: 600,
    fontSize: 22,
  },
  lottie: {
    width: 100,
    height: 100,
  },

  topEllipse: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    width: '100%',
  },
});