import CustomButton from "@/conponents/CustomButton";
import CustomDynamicButton from "@/conponents/CustomDynamicButton";
import Colors from "@/constants/colors";
import { router } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const [loc, setLoc] = useState<string | null>(null);

  const onPress = () => {
    if (loc === null) return;
    router.push("/(tabs)/explore/map");
  };
  return (
    <ScrollView>
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
            }}
          >
            <Image
              source={require("@/assets/images/explore/map.png")}
              style={{ resizeMode: "contain", width: 500, height: 535 }}
            />
          </View>
        </View>
        <View style={{ width: 354 }}>
          <CustomDynamicButton
            text="선택 완료"
            onPress={onPress}
            isPressable={loc !== null}
          />
        </View>
      </View>
    </ScrollView>
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
    top: 5,
  },
  selectDescription: {
    fontFamily: "Pretendard-Regular",
    fontSize: 14,
  },
});
