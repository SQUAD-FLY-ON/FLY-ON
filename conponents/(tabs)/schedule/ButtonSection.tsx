import CustomButton from "@/conponents/CustomButton";
import { Screens } from "@/constants/screens";
import { validateNextStepEnabled } from "@/libs/schedule/validateNextStepEnabled";
import { useScheduleStore } from "@/store/useScheduleStore";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function ButtonSection() {
  const currentStep = useScheduleStore((state) => state.currentStep);
  const nextEnabled = useScheduleStore(validateNextStepEnabled);

  const goToPrevStep = useScheduleStore((state) => state.goToPrevStep);
  const goToNextStep = useScheduleStore((state) => state.goToNextStep);
  const setCurrentMarkedDates = useScheduleStore((state) => state.setCurrentMarkedDates);
  const currentStepKey = Screens[currentStep].key;
  const isLoading = currentStepKey.includes('Loading');
  const prevButtonBackgroundColor = "#D2D2D2"
  if (isLoading) {
    return null;
  }
  const resetDates = () => {
    setCurrentMarkedDates({});
  }

  const handleNextButtonPress = () => {
    if (nextEnabled) {
      goToNextStep();
    }
  }
  const LeftButton = currentStep > 0 ? (
    <CustomButton
      onPress={goToPrevStep}
      text='이전 단계'
      style={styles.prevButton}
      textStyle={styles.prevText}
      backgroundColor={prevButtonBackgroundColor} />
  ) : (
    <CustomButton
      undo
      onPress={resetDates}
      text='초기화'
      style={styles.prevButton}
      textStyle={styles.prevText}
      backgroundColor={prevButtonBackgroundColor} />
  );

  const RightButton =
    <CustomButton
      text="다음 단계"
      onPress={handleNextButtonPress}
      containerStyle={{ flex: 1 }}
      textStyle={styles.rightButtonText}
      disabled={!nextEnabled} />

  return (<View style={[styles.container, currentStepKey.includes('Loading') && { display: 'none' }]}>
    {LeftButton}
    {RightButton}
  </View>)
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  prevButton: {
    paddingHorizontal: 17.5,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center'
  },
  nextButton: {
    paddingHorizontal: 17.5,
    alignItems: 'center'
  },
  prevText: {
    color: '#747474',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 500,
    fontFamily: 'Pretendard-Medium'
  },
  rightButtonText: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 20
  }

})