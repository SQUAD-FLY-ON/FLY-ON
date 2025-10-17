import FlightCard from "@/conponents/(tabs)/user/my-flight-records/FlightCard";
import Header from "@/conponents/Header";
import { mock_flight_logs } from "@/dummy/mock_flight_logs";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function MyFlightRecords() {
  const data = mock_flight_logs;
  return (
    <View style={styles.container}>
      <Header title="비행 기록" backButton={true} />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {data.content.map((v) => (
          <FlightCard
            key={v.id}
            id={v.id}
            name={v.airfieldName}
            date={v.createdAt}
            data={v}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 18,
  },
});
