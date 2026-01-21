import CustomButton from "@/conponents/CustomButton";
import LoadingComponent from "@/conponents/LoadingComponent";
import { fetchGptSchedule } from "@/libs/schedule/fetchGptSchedule";
import { useModalStore } from "@/store/useModalStore";
import { useScheduleStore } from "@/store/useScheduleStore";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/shallow";
import BottomAnimationSection from "./BottomAnimation";
import GreenWaveSvg from "./GreenWaveSvg";

export default function GenerateScheduleScreen() {
  const prevButtonBackgroundColor = "#D2D2D2";
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasShownAlertRef = useRef(false);

  const {
    gotoNextStep,
    currentMarkedDates,
    selectedPlaces,
    setCurrentStep,
    currentStep,
    selectedActivities,
    setSchedule,
  } = useScheduleStore(
    useShallow(state => ({
      gotoNextStep: state.goToNextStep,
      currentStep: state.currentStep,
      setCurrentStep: state.setCurrentStep,
      currentMarkedDates: state.currentMarkedDates,
      selectedPlaces: state.selectedPlaces,
      selectedActivities: state.selectedActivities,
      setSchedule: state.setSchedule,
    }))
  );
  const {showAlert ,showConfirm }= useModalStore(useShallow(state => ({
    showAlert: state.showAlert,
    showConfirm: state.showConfirm,
  })));
  const dates = Object.keys(currentMarkedDates);
  const scheduleStart = dates[0];
  const scheduleEnd = dates[dates.length - 1];
  console.log(scheduleStart, scheduleEnd,selectedPlaces,selectedActivities.id)
  const { data, isLoading, isError, failureCount } = useQuery({
    queryKey: ['gptschedule', scheduleStart, scheduleEnd, selectedPlaces, selectedActivities.id],
    queryFn: async () => {
      const apiData = { 
        scheduleStart, 
        scheduleEnd, 
        tourismSpotList: selectedPlaces, 
        paraglidingSpotId: Number(selectedActivities.id) 
      }
      return await fetchGptSchedule(apiData);
    },
    retry: 30,
    retryDelay: 2000,
    staleTime: 0,
    gcTime: 0,

  });
  console.log(data);
  // 타임아웃 설정
  useEffect(() => {
    const TIMEOUT_DURATION = 1000 * 60; // 60초 (1분)

    // 타임아웃 시작
    timeoutRef.current = setTimeout(async () => {
      if (!hasShownAlertRef.current) {
        hasShownAlertRef.current = true;
        const result = await showConfirm({
          title: "일정 생성 지연",
          description: "일정 생성에 예상보다 시간이 걸리고 있습니다.",
          description2: "이전 단계로 돌아가시겠어요?",
          pressButtonText: '예',
        });
        if (result) {
          setCurrentStep(currentStep - 1);
        }
      }
    }, TIMEOUT_DURATION);

    // 클린업
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentStep, setCurrentStep, showAlert]);
  useEffect(() => {
  if (failureCount > 0 && isLoading) {
    console.log(`🔄 재시도 중... (${failureCount}번째 실패 후)`);
  }
}, [failureCount, isLoading]);
  // 데이터 로딩 완료 시
  useEffect(() => {
    if (data) {
      // 타임아웃 제거
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setSchedule(data);
      gotoNextStep();
    }
  }, [data, isLoading, setSchedule, gotoNextStep]);

  // 에러 처리
  useEffect(() => {
    if (isError) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      showAlert({
        title: "일정 생성 실패",
        description: "일정 생성 중 오류가 발생했습니다.",
        description2: "다시 시도해주세요.",
        isError: true,
        pressButtonText: "확인"
      }).then(() => {
        setCurrentStep(currentStep - 1);
      });
    }
  }, [isError, currentStep, setCurrentStep, showAlert]);

  return (<View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={[styles.text, { marginTop: 72 }]}>선택한 장소를 기반으로</Text>
      <Text style={styles.text}>여행계획을 세우는 중이에요</Text>
      <Text style={styles.secondText}>AI가 여행지를 탐색하고 일정을 조합하는 중이에요.</Text>
      <Text style={[styles.secondText, { marginTop: 2 }]} >10초에서 1분 정도 걸릴 수 있어요.</Text>
      <LoadingComponent />
    </View>
    <BottomAnimationSection />
    <GreenWaveSvg style={styles.topEllipse} />
    <CustomButton onPress={() => {
      console.log('aaaa');
      setCurrentStep(currentStep - 1)
    }} containerStyle={styles.prevButtonPosition} textStyle={styles.prevText} backgroundColor={prevButtonBackgroundColor} text="이전 단계로" />
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
  secondText: {
    fontFamily: 'Pretendard-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 14, // 100% → fontSize와 동일하게
    letterSpacing: 0, // 0%
    textAlign: 'center',
    color: '#747474',
    marginTop: 12,
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
  prevButtonPosition: {
    position: 'absolute',
    bottom: 8,
    zIndex: 10,
    width: '100%',
    paddingHorizontal: 18,

  },
  prevButton: {
    paddingHorizontal: 17.5,
    gap: 6,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 12,
    backgroundColor: '#D2D2D2',
    borderRadius: 12,
    marginBottom: 24,


  },
  prevText: {
    color: "#747474",
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 500,
    fontFamily: "Pretendard-Medium",
    textAlign: 'center',
    alignSelf: 'center',
  },
});