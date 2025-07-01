import { Button, StyleSheet, Text, View } from "react-native";

const TravelCard = () => {
  return (
    <View style={styles.travelCard}>
      <View style={styles.cardTop}>
        <Text style={styles.title}>양평 여행 (3일)</Text>
        <Text style={styles.period}> 07.24 - 07. 26</Text>
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
  );
};

const styles = StyleSheet.create({
  travelCard: {
    width: 354,
    height: 210,
    flexShrink: 0,
    marginTop: 200,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    zIndex: 4,
  },
  cardTop: {
    paddingTop: 31,
    paddingBottom: 16,
    marginHorizontal: 18,
    flexDirection: "row",
    alignItems: "baseline",
    borderBottomColor: "rgba(208, 208, 208, 0.50)",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginLeft: 1,
  },
  period: {
    color: "#8E9297",
    fontSize: 16,
    fontWeight: 600,
    marginLeft: 12,
  },
  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TravelCard;
