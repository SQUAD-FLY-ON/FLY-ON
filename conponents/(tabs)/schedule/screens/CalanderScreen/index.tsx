import { View } from "react-native";
import TitleHeader from "../TitleHeader";
import CustomCalander from "./Calander";

export default function CalanderScreen() {
  const title = '여행 날짜 선택하기';
  const description = '일정을 계획할 날짜를 선택해주세요.'
  return (<View style={{ flex: 1 }}>
    <TitleHeader title={title} description={description} />
    <CustomCalander />
  </View>)
}