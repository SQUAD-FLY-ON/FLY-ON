import Background from "@/conponents/(tabs)/air/Background";
import { StyleSheet, Text } from "react-native";

export default function Report() {
  return (
    <Background>
      <Text style={styles.title}>비행기록 리포트</Text>
      <Text style={styles.description}>
        당신의 비행 데이터를 요약한 리포트를 지금 확인해보세요.
      </Text>
    </Background>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontFamily: "Pretendard-SemiBold",
    fontSize: 32,
    marginTop: 70,
    marginBottom: 16,
  },
  description: {
    color: "#FFF",
    fontFamily: "Pretendard-Regular",
    fontSize: 14,
    width: 232,
    textAlign: "center",
    marginBottom: 40,
  },
});
