// components/MyCard.tsx
import { activityArea } from "@/types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ActivityAreaCard({ item }: { item: activityArea }) {
  return (
    <View style={styles.card}>
      <Image source={item.image!} width={160} height={160} />
      <Text style={styles.text} numberOfLines={2}>
        {item.title}
      </Text>
      <View style={{ gap: 4, flexDirection: "row" }}>
        <Image
          source={require("@/assets/images/star.png")}
          width={18}
          height={18}
        />
        <Text style={styles.score}>{item.score}</Text>
        <Text style={styles.review}>({item.reviews})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    gap: 6,
  },
  text: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 14,
  },
  score: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 14,
  },
  review: {
    fontSize: 14,
    color: "#666",
  },
});
