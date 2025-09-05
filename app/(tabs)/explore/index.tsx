import ExploreHeader from "@/conponents/(tabs)/explore/ExploreHeader";
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
import Svg, { Path } from "react-native-svg";

export default function Index() {
  const [loc, setLoc] = useState<string | null>(null);

  const onPress = () => {
    router.push({
      pathname: "/(tabs)/explore/explore-list",
      params: {
        loc: loc,
      },
    });
  };

  useEffect(() => {
    return setLoc(null);
  }, []);

  return (
    <View style={styles.container}>
      <ExploreHeader />
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

        <View style={styles.buttonView}>
          {loc !== null && (
            <>
              <View style={styles.buttonDescription}>
                <Text style={styles.buttonDescriptionText}>
                  버튼을 눌러 다음 단계로 넘어가세요.
                </Text>
              </View>
              <Svg width={9} height={13} viewBox="0 0 9 13" fill="none">
                <Path
                  d="M7.5 4.33013C8.83333 5.09993 8.83333 7.02443 7.5 7.79423L1.44581e-07 12.1244L0 1.25211e-07L7.5 4.33013Z"
                  fill="#fff"
                />
              </Svg>
            </>
          )}
          <NextButton
            onPress={onPress}
            style={styles.nextBtn}
            isPressable={loc !== null}
          />
        </View>
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
    paddingBottom: 13,
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
    top: 20,
  },
  selectDescription: {
    fontFamily: "Pretendard-Regular",
    fontSize: 14,
  },
  buttonView: {
    position: "absolute",
    bottom: -40,
    right: 20,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonDescription: {
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDescriptionText: {
    color: "#747474",
    // fontFamily: "Pretendard-Regular",
    fontWeight: 400,
    fontSize: 14,
  },
  nextBtn: {
    width: 56,
    height: 56,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D2D2D2",
    marginLeft: 5.5,
  },
});
