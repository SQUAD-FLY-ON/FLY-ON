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
        source={require("@/assets/images/backgroundMountain.png")}
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
  backgroundMountain: {
    position: "absolute",
    bottom: -127,
    width: 437,
    height: 437,
  },
});
