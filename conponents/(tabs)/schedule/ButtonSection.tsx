import CustomButton from "@/conponents/CustomButton";
import { useScheduleStore } from "@/store/useScheduleStore";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

export default function ButtonSection() {
  const { currentStep, goToPrevStep, goToNextStep, setCurrentMarkedDates } = useScheduleStore(
    useShallow((state) => ({
      currentStep: state.currentStep,
      goToPrevStep: state.goToPrevStep,
      goToNextStep: state.goToNextStep,
      setCurrentMarkedDates: state.setCurrentMarkedDates,
    }))
  ); return (<View style={styles.container}>
    {
      currentStep > 0 ? (
        <CustomButton onPress={() => { goToPrevStep() }} text='이전 단계' style={{ paddingHorizontal: 17.5 }} textStyle={{ color: '#747474', fontSize: 20, lineHeight: 20 }} backgroundColor="#D2D2D2" />
      ) : (
        <CustomButton undo onPress={() => { setCurrentMarkedDates({})}} text='초기화' style={{ paddingHorizontal: 17.5, flexDirection: 'row', gap: 6, alignItems: 'center' }} textStyle={{ color: '#747474', fontSize: 20, lineHeight: 20 }} backgroundColor="#D2D2D2" />
      )
    }
    <CustomButton onPress={() => { goToNextStep(); }} text='다음 단계' containerStyle={{ flex: 1 }} textStyle={{ fontSize: 20, lineHeight: 20 }} />
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },

})