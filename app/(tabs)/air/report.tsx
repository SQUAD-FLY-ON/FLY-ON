import Background from "@/conponents/(tabs)/air/Background";
import { useSearchParams } from "expo-router/build/hooks";
import { StyleSheet, Text, View } from "react-native";

export default function Report() {
  const params = useSearchParams() as { time?: string };
  const time = params?.time ? Number(params.time) : 0;

  return (
    <Background>
      <Text style={styles.title}>비행기록 리포트</Text>
      <Text style={styles.description}>
        당신의 비행 데이터를 요약한 리포트를 지금 확인해보세요.
      </Text>
      <View style={styles.reportContainer}>
        <View style={styles.reportTitleBox}>
          <Text style={styles.reportTitle}>REPORT</Text>
        </View>
      </View>
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
  reportContainer: {
    width: 338,
    height: 443,
    borderRadius: 24,
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: "#FFF",
    zIndex: 10,
    alignItems: "center",
  },
  reportTitleBox: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 23,
    borderBottomColor: "#D0D0D080",
    borderBottomWidth: 2,
    alignItems: "center",
  },
  reportTitle: {
    color: "#3A88F4",
    fontFamily: "Pretendard-Bold",
    fontSize: 24,
  },
});
