import { calculatePolygonCentroid } from "@/libs/regionSelectMap";
import { fetchTourism } from "@/libs/schedule/fetchTourism";
import { useScheduleStore } from "@/store/useScheduleStore";
import { useQuery } from "@tanstack/react-query";
import { StyleSheet, Text } from "react-native";
import PlaceList from "./PlaceList";
export default function SelectPlaceScreen() {

  const selectedRegion = useScheduleStore(state => state.selectedRegion);
  const center = calculatePolygonCentroid(selectedRegion.coordinates);
  const { data, isLoading } = useQuery({ queryKey: ['place', center?.latitude, center?.longitude], queryFn: () => fetchTourism({ lat: center?.latitude, lon: center?.longitude, }), enabled: !!center });
  return (
    <>
      {
        isLoading ? (
          <Text style = {styles.loadingText}>데이터를 불러오고 있습니다..</Text>
        ) :

          <PlaceList
            title="체험장/장소 선택하기(2/2)"
            description="일정에 추가하고 싶은 장소를 선택해주세요."
            // filters={filters}
            data={data ? data : []}
          />
      }
    </>
  )
}
const styles = StyleSheet.create({
  loadingText: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Pretendard-bold'
  }
})