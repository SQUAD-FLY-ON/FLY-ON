import { useState } from "react";
import PlaceList from "./PlaceList";

export default function SelectActivityScreen() {
  const filters = [
    { key: 'popular', text: '인기순' },
    { key: 'score', text: '별점순' },
  ]
  const dummyActivity = [{ id: 1, image: require('@/assets/images/dummy_image_activity_area.png'), title: '양평 패러러브 패러글라이딩', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 },
  { id: 2, image: require('@/assets/images/dummy_image_activity_area.png'), title: '양평 패러러브 패러글라이딩', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 },
  { id: 3, image: require('@/assets/images/dummy_image_activity_area.png'), title: '양평 패러러브 패러글라이딩', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 },
  { id: 4, image: require('@/assets/images/dummy_image_activity_area.png'), title: '양평 패러러브 패러글라이딩', address: '경기 양평군 옥천면 동막길 49 1층', score: 4.9, review: 19 }
  ]
  const [selectedActivity, setSelectedActivity] = useState(0);
  return (
    <>
    <PlaceList
      title="체험장/장소 선택하기(1/2)"
      description="일정에 추가하고 싶은 체험장을 선택해주세요."
      filters={filters}
      data={dummyActivity}
      onSelect={setSelectedActivity}
      selectedId={selectedActivity}
    />
    </>
  )
}