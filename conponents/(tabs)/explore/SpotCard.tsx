import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinkIcon from "./icons/LinkIcon";
import PhoneIcon from "./icons/PhoneIcon";
import MapPinIcon from "./icons/MapPinIcon";

const SpotCard = () => {
  const openSite = async () => {
    const url = "https://naver.com";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`이 URL을 열 수 없습니다: ${url}`);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>체험장 정보</Text>
      </View>
      <View style={styles.contentsContainer}>
        <View style={styles.contents}>
          <MapPinIcon />
          <Text style={styles.contentsText}>
            경기 양평군 옥천면 동막길 49 1층
          </Text>
        </View>
        <View style={styles.contents}>
          <PhoneIcon />
          <Text style={styles.contentsText}>000-0000-0000</Text>
        </View>
        <View style={styles.contents}>
          <LinkIcon />
          <TouchableOpacity onPress={openSite}>
            <Text style={[styles.contentsText, styles.linkText]}>
              체험장 사이트 바로가기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SpotCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  titleContainer: {
    paddingBottom: 12,
    borderBottomColor: "rgba(208, 208, 208, 0.50)",
    borderBottomWidth: 2,
  },
  title: {
    fontFamily: "Pretendard-Bold",
    fontSize: 20,
  },
  contentsContainer: {
    paddingVertical: 12,
    paddingHorizontal: 5,
    gap: 8,
  },
  contents: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  contentsText: {
    fontFamily: "Pretendrad-Regular",
    fontSize: 16,
  },
  linkText: {
    color: "#3A88F4",
    textDecorationLine: "underline",
  },
});
