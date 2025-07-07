import CustomButton from "@/conponents/CustomButton";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>체험장 탐색하기</Text>
        <Text style={styles.description}>
          이번주 날씨 기준 적합한 체험장을 알려드려요
        </Text>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Text>FLY:OFF 지역</Text>
          <Text>FLY:ON 지역</Text>
        </View>
      </View>
      <View style={{ width: 354 }}>
        <CustomButton
          text="선택 완료"
          onPress={() => router.push("/(tabs)/explore/map")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },
  header: {
    alignItems: "center",
    paddingTop: 35,
  },
  title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 24,
    marginBottom: 16,
  },
  description: {
    fontFamily: "Pretendard-Regular",
    fontSize: 14,
    marginBottom: 5,
  },
});
