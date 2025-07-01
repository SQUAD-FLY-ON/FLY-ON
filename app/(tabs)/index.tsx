import HomeImage from "@/conponents/AnimatedImages/HomeImage";
import Heading1 from "@/conponents/CustomText/Heading1";
import Paragraph6 from "@/conponents/CustomText/Paragraph6";
import MainBackground from "@/conponents/LinearBackground/MainBackground";
import TravelCard from "@/conponents/TravelCard/TravelCard";
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        horizontal={false}
      >
        <MainBackground />
        <View style={styles.myStatus}>
          {/* 비행고도 기록 */}
          <View>
            <Heading1 style={styles.logo}>LOGO</Heading1>
            <View style={styles.gliderView}>
              <Paragraph6 style={styles.gliderText}>설악산 글라이더</Paragraph6>
            </View>

            <Text style={styles.userName}>
              <Text style={styles.userNameText}>김유이</Text>
              <Text style={styles.userNameSuffixText}>님</Text>
            </Text>
          </View>

          {/* 이미지 요소 */}
          <HomeImage />

          {/* 나의 일정 카드리스트 */}
          <TravelCard />
          {/* <View style={styles.travelCard}>
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
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EAF2FC",
  },
  scrollContainer: {
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
  myStatus: {},
  logo: {
    fontWeight: 900,
    marginTop: 12,
  },
  gliderView: {
    backgroundColor: "#3A88F4",
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginTop: 14,
  },
  gliderText: {
    color: "#fff",
    fontWeight: 700,
  },
  userName: {
    marginTop: 12,
    marginLeft: 11,
  },
  userNameText: {
    color: "#333",
    fontSize: 24,
    fontWeight: 700,
    marginRight: 4,
  },
  userNameSuffixText: {
    color: "#333",
    fontSize: 20,
    fontWeight: 400,
  },
});
