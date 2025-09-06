import CommunitySection from "@/conponents/(tabs)/index/CommunitySection";
import FooterSection from "@/conponents/(tabs)/index/FooterSection";
import MyStatusSection from "@/conponents/(tabs)/index/MyStatusSection";
import HomeLinearBackground from "@/conponents/(tabs)/index/MyStatusSection/LinearBackground/HomeLinearBackground";
import NearActivitySection from "@/conponents/(tabs)/index/NearActivitySection";
import { fetchMembers } from "@/libs/fetchMember";
import { store } from "expo-router/build/global-state/router-store";
import { useEffect, useState } from "react";
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
