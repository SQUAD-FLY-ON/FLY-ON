import FooterSection from "@/conponents/(tabs)/index/FooterSection";
import MyStatusSection from "@/conponents/(tabs)/index/MyStatusSection";
import HomeLinearBackground from "@/conponents/(tabs)/index/MyStatusSection/LinearBackground/HomeLinearBackground";
import RecommendSection from "@/conponents/(tabs)/index/RecommendSection";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
    >
      {/* 상단 LinearBackground 적용을 위한 View */}
      <View>
        <HomeLinearBackground />
        <MyStatusSection />
        <RecommendSection />
      </View>
      {/* <CommunitySection /> */}
      <FooterSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: Dimensions.get("window").width,
    backgroundColor: "#EAF2FC",
    marginBottom: 80,
  },
});
