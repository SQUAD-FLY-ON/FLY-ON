import { fetchWeather } from "@/libs/(tabs)/schedule/fetchWeather";
import { useScheduleStore } from "@/store/useScheduleStore";
import { RegionName } from "@/types";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SubRegionSvg from "./SubRegionSvg";
import WeatherCard from "./WeatherCard";

export default function SelectSubRegion() {
  const router = useRouter();
  const selectedRegion = useScheduleStore(state => state.selectedRegion);
  const tripStart = dayjs().format('YYYYMMDD');
  const tripEnd = dayjs().add(4, 'day').format('YYYYMMDD');
  const goToPrevStep = useScheduleStore(state => state.goToPrevStep);
  useEffect(() => {
    if (selectedRegion.key === '' && selectedRegion.name === '') {
      goToPrevStep();
    }
  }, [selectedRegion])
  const { data } = useQuery({
    queryKey: ['weather', selectedRegion.name],
    queryFn: () => fetchWeather({
      // selectedRegion.name을 RegionName 타입으로 간주하라고 알려줌
      sido: selectedRegion.name as RegionName,
      tripStart,
      tripEnd
    }),
    enabled: selectedRegion.name !== ''
  });
  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>여행 지역 선택하기(2/2)</Text>
      <Text style={styles.guideText}>선택한 날짜 기준 비행하기 좋은 지역을 알려드릴게요</Text>
      {selectedRegion.name !== '' && <SubRegionSvg province={selectedRegion.name} style={styles.subRegion} />}
      {data &&
        <FlatList
          data={data}
          renderItem={({ item }) => <WeatherCard weatherData={item} />}
          keyExtractor={(item) => item.sigungu}
          contentContainerStyle={styles.weathercontentContainer}
          style={styles.weatherContainer}
        />
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    position: 'relative',
    marginTop: 16,
    gap: 12,
  },
  title: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 24,
    fontWeight: 700,
  },
  guideText: {
    color: '#747474',
    fontFamily: 'Pretendard-Regular',

  },
  iconsRowContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  square: {
    width: 10,
    height: 10,
  },
  subRegion: {
    marginTop: 12,
  },
  iconText: {
    fontFamily: 'Pretendard-Regular',
    color: '#000000',
    height: 17,
    lineHeight: 17,
  },
  weatherContainer: {
    flex: 1,
    width: '100%',
    marginTop: 24,
    marginBottom:8,
  },
  weathercontentContainer: {
    gap: 12,
  }
});