import Dropdown from "@/conponents/(tabs)/air/Dropdown";
import Close from "@/conponents/icons/Close";
import FloatingButtonIcon from "@/conponents/icons/FloatingButtonIcon";
import { MainGradient } from "@/conponents/LinearGradients/MainGradient";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const onPressClose = () => {
    router.push("/");
  };

  const mockItems = [{ label: "양평 여행(07.22-07.24)", value: "양평여행" }];

  return (
    // <View style={styles.container}>
    <MainGradient style={styles.container}>
      <Pressable onPress={onPressClose} style={styles.closeButton}>
        <Close />
      </Pressable>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>비행 기록하기</Text>
        <Text style={styles.description}>
          비행 일정을 선택하여 비행모드로 전환하여 비행을 기록해보세요.
        </Text>
        <Dropdown itemProps={mockItems} />
        <MainGradient style={styles.recordButton}>
          <FloatingButtonIcon width={61.7} />
          <Text style={styles.recordButtonText}>FLY: ON</Text>
        </MainGradient>
        <Text style={styles.flightTime}>00 : 01</Text>
      </View>
    </MainGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 12,
    marginRight: 16,
    position: "absolute",
    right: 0,
  },
  contentWrapper: {
    alignItems: "center",
  },
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
  recordButton: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#FFF",
    borderWidth: 10,
    marginTop: 49,
    marginBottom: 56,
  },
  recordButtonText: {
    color: "#FFF",
    fontFamily: "Pretendard-Bold",
    fontSize: 20,
  },
  flightTime: {
    color: "#FFF",
    fontFamily: "Pretendard-Regular",
    fontSize: 24,
  },
});
