import TravelCard from "@/conponents/(tabs)/my-schedule/TravelCard/TravelCard";
import Header from "@/conponents/Header";
import { fetchTourSchedule } from "@/libs/fetchTourSchedule";
import { useQuery } from "@tanstack/react-query";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const { data: response } = useQuery({ queryKey: ['mySchedule'], queryFn: () => fetchTourSchedule() });
  const schedules = response?.data.tourismSchedules?.filter(schedule => schedule.dailyTourismSpots !== null);
  console.log(schedules);
  return (
    <View style={styles.container}>
      <Header title="나의 여행" backButton={false} />
      <FlatList
        data={schedules}
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 24, paddingBottom: 120 }}
        renderItem={({ item }) => <TravelCard key={item.id} schedule={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
