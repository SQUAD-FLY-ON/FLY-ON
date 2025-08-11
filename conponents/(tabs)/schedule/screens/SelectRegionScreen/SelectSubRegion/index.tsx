import { subRegionApiData } from "@/types";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SubRegionSvg from "./SubRegionSvg";
import WeatherCard from "./WeatherCard";

export default function SelectSubRegion() {
  const dummyData: subRegionApiData[] = [
    {
      number: 1,
      name: "강남구",
      weathers: [
        {
          date: "7/2",
          minTemp: 24,
          maxTemp: 30,
          weatherStatus: "cloudy"
        },
        {
          date: "7/3",
          minTemp: 25,
          maxTemp: 31,
          weatherStatus: "rainy"
        },
        {
          date: "7/4",
          minTemp: 23,
          maxTemp: 28,
          weatherStatus: "sunny"
        },

      ],
      distance: 3.5
    },
    {
      number: 2,
      name: "송파구",
      weathers: [
        {
          date: "7/2",
          minTemp: 25,
          maxTemp: 31,
          weatherStatus: "partlyCloudy"
        },
        {
          date: "7/3",
          minTemp: 26,
          maxTemp: 32,
          weatherStatus: "overcast"
        },
        {
          date: "7/4",
          minTemp: 24,
          maxTemp: 29,
          weatherStatus: "rainy"
        }
      ],
      distance: 7.2
    },
    {
      number: 3,
      name: "서초구",
      weathers: [
        {
          date: "7/2",
          minTemp: 23,
          maxTemp: 29,
          weatherStatus: "sunny"
        },
        {
          date: "7/3",
          minTemp: 24,
          maxTemp: 30,
          weatherStatus: "cloudy"
        },
        {
          date: "7/4",
          minTemp: 22,
          maxTemp: 27,
          weatherStatus: "sleet"
        }
      ],
      distance: 5.1
    }
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>여행 지역 선택하기(2/2)</Text>
      <Text style={styles.guideText}>선택한 날짜 기준 비행하기 좋은 지역을 알려드릴게요</Text>
      <SubRegionSvg province={'gyeonggi'} style={styles.subRegion} />
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <WeatherCard weatherData={item} />}
        keyExtractor={(item) => item.number.toString()}
        contentContainerStyle={styles.weathercontentContainer}
        style={styles.weatherContainer}
      />
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
  },
  weathercontentContainer: {
    gap: 12,
    marginBottom: 8,
  }
});