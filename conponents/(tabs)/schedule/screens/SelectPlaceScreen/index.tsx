import { Screens } from "@/constants/screens";
import { useScheduleStore } from "@/store/useScheduleStore";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Filter from "../../Filter";
import TitleHeader from "../TitleHeader";
import PlaceCard from "./PlaceCard";

export default function SelectPlaceScreen() {
  const currentStep = useScheduleStore(state => state.currentStep);
  const cuurentStepKey = Screens[currentStep].key
  const title = `체험장/장소 선택하기${cuurentStepKey === 'SelectPlace1' ? '(1/2)' : '(2/2)'}`;
  const description = '일정에 추가하고 싶은 체험장을 선택해주세요.'
  const filters = [
    { key: 'popular', text: '인기순' },
    { key: 'score', text: '별점순' },
  ]
  const dummyActivity = [{ id: 1, image: require('@/assets/images/dummy_image_activity_area.png'), title: '양평 패러러브 패러글라이딩', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 },
  { id: 2, image: require('@/assets/images/dummy_image_activity_area.png'), title: '양평 패러러브 패러글라이딩', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 },
  { id: 3, image: require('@/assets/images/dummy_image_activity_area.png'), title: '양평 패러러브 패러글라이딩', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 },
  { id: 4, image: require('@/assets/images/dummy_image_activity_area.png'), title: '양평 패러러브 패러글라이딩', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 }
  ]
  const dummyPlace = [{ id: 1, image: require('@/assets/images/dummy_image_place.png'), title: '산음 자연 휴양림', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 },
  { id: 2, image: require('@/assets/images/dummy_image_place.png'), title: '산음 자연 휴양림', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 },
  { id: 3, image: require('@/assets/images/dummy_image_place.png'), title: '산음 자연 휴양림', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 },
  { id: 4, image: require('@/assets/images/dummy_image_place.png'), title: '산음 자연 휴양림', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 }
  ]
  const [currentFilter, setCurrentFilter] = useState('popular');
  const [selectedActivity, setSelectedActivity] = useState(0);
  return (<View style={{ flex: 1 }}>
    <TitleHeader title={title} description={description} />
    <Filter filters={filters} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
    <FlatList style={{ marginVertical: 14 }} contentContainerStyle={styles.placeContainer} data={cuurentStepKey === 'SelectPlace1' ? dummyActivity : dummyPlace} renderItem={({ item }) => <PlaceCard key={item.id} onPress={() => { setSelectedActivity(item.id) }} selected={item.id === selectedActivity} image={item.image} title={item.title} address={item.address} score={item.score} review={item.review} />} />
  </View>)
}
const styles = StyleSheet.create({
  placeContainer: {
    gap: 8,
  }
})