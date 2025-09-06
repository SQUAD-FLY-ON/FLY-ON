import FooterSection from "@/conponents/(tabs)/index/FooterSection";
import MyStatusSection from "@/conponents/(tabs)/index/MyStatusSection";
import HomeLinearBackground from "@/conponents/(tabs)/index/MyStatusSection/LinearBackground/HomeLinearBackground";
import NearActivitySection from "@/conponents/(tabs)/index/NearActivitySection";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View>
        <HomeLinearBackground />
        <MyStatusSection />
        <NearActivitySection />
      </View>
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
