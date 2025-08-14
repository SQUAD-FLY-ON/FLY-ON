import Close from "@/conponents/icons/Close";
import { MainGradient } from "@/conponents/LinearGradients/MainGradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

const Background = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const onPressClose = () => {
    console.log("close clicked");

    router.navigate("/(tabs)");
  };

  return (
    <MainGradient style={styles.container}>
      <Pressable onPress={onPressClose} style={styles.closeButton}>
        <Close />
      </Pressable>
      {children}
      <Image
        source={require("@/assets/images/air/cloud2.png")}
        style={[styles.cloud, { right: -80, top: 200 }]}
      />
      <Image
        source={require("@/assets/images/air/cloud2.png")}
        style={[styles.cloud, { left: -80, top: 300 }]}
      />
      <Image
        source={require("@/assets/images/air/cloud4.png")}
        style={[styles.cloud, { width: 117, height: 117, right: 10, top: 500 }]}
      />
      <Image
        source={require("@/assets/images/air/backgroundMountain.png")}
        style={styles.backgroundMountain}
      />
    </MainGradient>
  );
};

export default Background;

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
  cloud: {
    position: "absolute",
    width: 205,
    height: 205,
    zIndex: -10,
  },
  backgroundMountain: {
    position: "absolute",
    bottom: -127,
    width: 437,
    height: 437,
  },
});
