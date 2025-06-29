import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.myStatus}>
            <View style={styles.flightLevel}>
              <Text>LOGO</Text>
              <Text>설악산 글라이더</Text>
              <Text>김유이 님</Text>
            </View>
            <View style={styles.travelCard}>
              <View>
                <Text>양평 여행 (3일)</Text>
                <Text> 07.24 - 07. 26</Text>
              </View>
              <View>
                <View>
                  <Text>1일차</Text>
                  <Text>양평 패러러브 패러글라이딩</Text>
                </View>
                <View>
                  <Text>2일차</Text>
                  <Text>000 드라마 세트장</Text>
                </View>
                <View>
                  <Text>3일차</Text>
                  <Text>양평 해수욕장</Text>
                </View>
              </View>
              <View style={styles.cardBottom}>
                <Text>2인</Text>
                <Button onPress={() => {}} title="일정보기" />
              </View>
            </View>
            <Text>홈페이지</Text>
            <Text>홈페이지</Text>
            <Text>홈페이지</Text>
            <Text>홈페이지</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  scrollContainer: {
    width: 400,
    backgroundColor: "#EAF2FC",
    alignItems: "center",
  },
  myStatus: {},
  flightLevel: {},
  travelCard: {
    width: 354,
    height: 210,
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
