import { Screens } from "@/constants/screens";
import { useScheduleStore } from "@/store/useScheduleStore";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Filter from "../../Filter";
import TitleHeader from "../TitleHeader";
import PlanCard from "./PlanCard";

export default function AIRecommendPlanScreen() {
  const currentStep = useScheduleStore(state => state.currentStep);
  const label = Screens[currentStep].label;
  const description = Screens[currentStep].description!;
  const [currentDay, setCurrentDay] = useState('1');
  const days = [{ key: '1', text: 'Day1' }, { key: '2', text: 'Day 2' }, { key: '3', text: 'Day 3' },];
  const data = [
    {
      type: 'restaurant',
      place: '아델라한옥',
      address: '경기 양평군 개군면 공서울길 49-1 나동 1층',
      image: require('@/assets/images/dummy_image_place.png'),
    },
    {
      type: 'activity',
      place: '양평 패러러브 패러글라이딩',
      address: '경기 양평군 옥천면 동막길 49 1층',
      image: require('@/assets/images/dummy_image_activity_area.png'),
    },
    {
      type: 'restaurant',
      place: '파스타정원',
      address: '경기 양평군 서종면 북한강로 941',
      image: require('@/assets/images/dummy_image_place.png'),
    },
    {
      type: 'activity',
      place: '양평 레일바이크',
      address: '경기 양평군 용문면 용문산로 250',
      image: require('@/assets/images/dummy_image_activity_area.png'),
    },
    {
      type: 'lodging',
      place: '양평 힐링하우스펜션',
      address: '경기 양평군 강하면 강남로 33',
      image: null,
    },
    {
      type: 'restaurant',
      place: '두물머리 연핫도그',
      address: '경기 양평군 양서면 양수로 93',
      image: require('@/assets/images/dummy_image_place.png'),
    },
    {
      type: 'activity',
      place: '두물머리 카약 체험',
      address: '경기 양평군 양서면 두물머리길 125',
      image: require('@/assets/images/dummy_image_activity_area.png'),
    },
    {
      type: 'lodging',
      place: '양평 숲속의하루 글램핑',
      address: '경기 양평군 청운면 가현리 산 74-2',
      image: null,
    },
    {
      type: 'lodging',
      place: '더스테이힐링파크',
      address: '경기 양평군 서종면 문호리 877',
      image: null,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 5 }}>
        <TitleHeader title={label} description={description} />
      </View>
      <Filter filters={days} currentFilter={currentDay} setCurrentFilter={setCurrentDay} />
      <FlatList style={{ marginVertical: 21, width: '100%', marginLeft: 2, }}
        contentContainerStyle={styles.planContainer}
        data={data}
        renderItem={({ item, index }) => <PlanCard isLast={index === data.length - 1} key={index} image={item.image} type={item.type} index={index} place={item.place} address={item.address} />} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 3,
    paddingRight: 14,
    flex: 1,
  },
  planContainer: {
    width: '100%',
  },
})