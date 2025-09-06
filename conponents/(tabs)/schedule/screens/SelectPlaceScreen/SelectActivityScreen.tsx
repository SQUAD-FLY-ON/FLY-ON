import { fetchSpotMarkers } from "@/libs/fetchSpots";
import { calculatePolygonCentroid, getCorners } from "@/libs/regionSelectMap";
import { useScheduleStore } from "@/store/useScheduleStore";
import { useQuery } from "@tanstack/react-query";
import ActivityList from "./ActivityList";

export default function SelectActivityScreen() {
  const filters = [
    { key: 'popular', text: '인기순' },
    { key: 'score', text: '별점순' },
  ]
  const selectedRegion = useScheduleStore(state => state.selectedRegion);
  const center = calculatePolygonCentroid(selectedRegion.coordinates); 
  const corner = getCorners(selectedRegion.coordinates);
  const { data } = useQuery({
    queryKey: ['spotMarkers', center?.latitude, center?.longitude], queryFn: async () => await fetchSpotMarkers({ centerLatitude: center?.latitude, centerLongitude: center?.longitude, cornerLatitude: corner?.cornerLatitude, cornerLongitude: corner?.cornerLongitude}),
    // enabled: currentLocation !== null
  })
  return (
    <>
      <ActivityList
        title="체험장/장소 선택하기(1/2)"
        description="일정에 추가하고 싶은 체험장을 선택해주세요."
        filters={filters}
        data={data}
      />
    </>
  )
}