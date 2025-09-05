import PlaceCard from "@/conponents/(tabs)/explore/PlaceCard";
import Header from "@/conponents/Header";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExploreList() {
  return (
    <View>
      <Header title="체험장 목록" />
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.TopView}>
          <Text style={styles.TopTitle}>
            &nbsp;&nbsp;•&nbsp;&nbsp;수도권 체험장 (10)
          </Text>
          <View>
            <Text>별점 순</Text>
          </View>
        </View>
        <View>
          <PlaceCard
            id="1"
            image={require("@/assets/images/dummy_image_activity_area.png")}
            title="양평 패러러브 패러글라이딩"
            address="경기 양평군 옥천면 동막길 49 1층"
            score={4.9}
            review={19}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 100,
  },
  TopView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  TopTitle: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 22,
  },
});
