import NextButton from "@/conponents/(tabs)/explore/NextButton";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [loc, setLoc] = useState<string | null>(null);

  const onPress = () => {
    if (loc === null) return;
    router.push("/(tabs)/explore/map");
  };

  useEffect(() => {
    return setLoc(null);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>체험장 탐색하기</Text>
        <Text style={styles.description}>
          이번주 날씨 기준 적합한 체험장을 알려드려요
        </Text>
        <View style={{ flexDirection: "row", gap: 16 }}>
          <View style={styles.flyLocView}>
            <View
              style={[styles.flyLocColor, { backgroundColor: "#E5E5E4" }]}
            />
            <Text>FLY:OFF 지역</Text>
          </View>
          <View style={styles.flyLocView}>
            <View
              style={[styles.flyLocColor, { backgroundColor: "#C3ECFF" }]}
            />
            <Text>FLY:ON 지역</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingTop: 5, alignItems: "center" }}>
        {loc === null && (
          <View style={styles.selectDescriptionView}>
            <Text style={styles.selectDescription}>
              체험장을 탐색할 지역을 선택하세요
            </Text>
          </View>
        )}
        <View
          style={{
            width: Dimensions.get("window").width,
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            source={require("@/assets/images/explore/map.png")}
            style={{ resizeMode: "contain", width: 480, height: 480 }}
          />
          <TouchableOpacity
            onPress={() => setLoc("충청북도")}
            style={{ position: "absolute", top: 118, right: 127 }}
          >
            <Image
              source={require("@/assets/images/map/flyon/충청북도.png")}
              style={{ resizeMode: "contain", width: 120 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLoc("경상북도")}
            style={{ position: "absolute", top: 130, right: 53 }}
          >
            <Image
              source={require(`@/assets/images/map/flyon/경상북도.png`)}
              style={{ resizeMode: "contain", width: 150 }}
            />
          </TouchableOpacity>
        </View>
        <NextButton
          onPress={onPress}
          style={styles.nextBtn}
          isPressable={loc !== null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },
  header: {
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 34,
  },
  title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 24,
    marginBottom: 16,
  },
  description: {
    fontFamily: "Pretendard-Regular",
    fontSize: 14,
    marginBottom: 5,
  },
  flyLocView: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  flyLocColor: {
    width: 10,
    height: 10,
  },
  selectDescriptionView: {
    height: 41,
    backgroundColor: "#ECF4FE",
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 18,
    zIndex: 5,
    position: "absolute",
    top: -10,
  },
  selectDescription: {
    fontFamily: "Pretendard-Regular",
    fontSize: 14,
  },
  nextBtn: {
    width: 56,
    height: 56,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D2D2D2",
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 10,
  },
});
