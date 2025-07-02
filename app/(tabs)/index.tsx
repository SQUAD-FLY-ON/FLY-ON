import HomeImage from "@/conponents/(tabs)/AnimatedImages/HomeImage";
import HomeLinearBackground from "@/conponents/(tabs)/LinearBackground/HomeLinearBackground";
import TravelCard from "@/conponents/(tabs)/TravelCard/TravelCard";
import Heading1 from "@/conponents/CustomText/Heading1";
import Paragraph6 from "@/conponents/CustomText/Paragraph6";
import Community from "@/conponents/main/Community";
import Footer from "@/conponents/main/Footer";
import NearActivity from "@/conponents/main/NearActivity";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
    >
      <View>
        <HomeLinearBackground />
        <View style={styles.myStatus}>
          {/* 비행고도 기록 */}
          <View>
            <Heading1 style={styles.logo}>LOGO</Heading1>
            <View style={styles.gliderView}>
              <Paragraph6 style={styles.gliderText}>설악산 글라이더</Paragraph6>
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
        <NearActivity />
      </View>
      <Community />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: Dimensions.get("window").width,
    backgroundColor: "#EAF2FC",
  },
  myStatus: {
    padding: 16,
  },
  logo: {
    fontWeight: 900,
    marginTop: 12,
  },
  gliderView: {
    backgroundColor: "#3A88F4",
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginTop: 14,
  },
  gliderText: {
    color: "#fff",
    fontWeight: 700,
  },
  userName: {
    marginTop: 12,
    marginLeft: 11,
  },
  userNameText: {
    color: "#333",
    fontSize: 24,
    fontWeight: 700,
    marginRight: 4,
  },
  userNameSuffixText: {
    color: "#333",
    fontSize: 20,
    fontWeight: 400,
  },
});
