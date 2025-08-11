import { subRegionApiData } from "@/types";
import { Image, StyleSheet, Text, View } from "react-native";

export default function WeatherCard({ weatherData }: { weatherData: subRegionApiData }) {
  const imageMap = {
    sunny: require('@/assets/images/sunny.png'),
    partlyCloudy: require('@/assets/images/partlyCloudy.png'),
    cloudy: require('@/assets/images/cloudy.png'),
    overcast: require('@/assets/images/overcast.png'),
    rainy: require('@/assets/images/rainy.png'),
    sleet: require('@/assets/images/sleet.png'),
    snowy: require('@/assets/images/snowy.png'),
  };
  return (<View style={styles.container}>
    <View style={styles.regionContainer}>
      <Text style={styles.regionTitle}>{weatherData.name}</Text>
      <Text style={[styles.regionDescription, { marginTop: 4 }]}>{weatherData.distance}km</Text>
      <Text style={styles.regionDescription}>체험장 수: {weatherData.number}</Text>
    </View>
    <View style={styles.weatherContainer}>
      {
        weatherData.weathers.map((a) => {

          return (<View key={a.date} style={styles.weather}>
            <Text style={styles.date}>{a.date}</Text>
            <Image style={{ width: 36, height: 33 }} source={imageMap[a.weatherStatus]} resizeMode="contain" />
            <Text style={styles.temp}>{a.minTemp}° / {a.maxTemp}°</Text>
          </View>)
        })
      }
    </View>
  </View>)
}
const styles = StyleSheet.create({
  container: {
    gap: 12,
    flexDirection: 'row',
    width: '100%',
  },
  regionContainer: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingTop: 11,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    width: 84,
  },
  regionTitle: {
    color: '#333333',
    fontWeight: 600,
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
  },
  regionDescription: {
    color: '#747474',
    fontWeight: 400,
    fontFamily: 'Pretendard-Regular',
    fontSize: 10,
  },
  weatherContainer: {
    flex: 1,
    gap: 8,
    flexDirection: 'row',
    paddingVertical: 11,
    paddingRight: 8,
    paddingLeft: 9,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
  },
  weather: {
  },
  date: {
    color: '#3A88F4',
    fontSize: 8,
    fontWeight: 700,
    fontFamily: 'Pretendard-Bold',
  },
  temp: {
    color: '#747474',
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 8,
    fontWeight: 600,
    alignSelf: 'center',
  }
})