import CommunitySection from "@/conponents/(tabs)/CommunitySection";
import FooterSection from "@/conponents/(tabs)/FooterSection";
import MyStatusSection from "@/conponents/(tabs)/MyStatusSection";
import HomeLinearBackground from "@/conponents/(tabs)/MyStatusSection/LinearBackground/HomeLinearBackground";
import NearActivitySection from "@/conponents/(tabs)/NearActivitySection";
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
        <NearActivitySection />
      </View>
      <CommunitySection />
      <FooterSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: Dimensions.get("window").width,
    backgroundColor: "#EAF2FC",
  },
});
