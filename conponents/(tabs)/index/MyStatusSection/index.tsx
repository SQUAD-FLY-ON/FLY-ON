import { StyleSheet, Text, View } from "react-native";
import HomeImage from "./AnimatedImages/HomeImage";
import TravelCard from "./TravelCard/TravelCard";
import Colors from "@/constants/colors";

export default function MyStatusSection() {
  return (
    <View style={styles.myStatus}>
      {/* 비행고도 기록 */}
      <View>
        <Text style={styles.logo}>LOGO</Text>
        <View style={styles.gliderView}>
          <Text style={styles.gliderText}>설악산 글라이더</Text>
        </View>

        <Text style={styles.userName}>
          <Text style={styles.userNameText}>김유이</Text>
          <Text style={styles.userNameSuffixText}>님</Text>
        </Text>
      </View>
      {/* 이미지 요소 */}
      <HomeImage />
      {/* 나의 일정 카드리스트 */}
      <TravelCard />
    </View>
  );
}

const styles = StyleSheet.create({
  myStatus: {
    padding: 16,
  },
  logo: {
    fontFamily: "Pretendard-Bold",
    fontSize: 24,
    color: Colors.text.text100,
    fontWeight: 900,
    marginTop: 12,
  },
  gliderView: {
    backgroundColor: Colors.main,
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginTop: 14,
  },
  gliderText: {
    fontFamily: "Pretendard-Regular",
    fontSize: 12,
    color: "#fff",
    fontWeight: 700,
  },
  userName: {
    marginTop: 12,
    marginLeft: 11,
  },
  userNameText: {
    color: Colors.text.text100,
    fontSize: 24,
    fontWeight: 700,
    marginRight: 4,
  },
  userNameSuffixText: {
    color: Colors.text.text100,
    fontSize: 20,
    fontWeight: 400,
  },
});
