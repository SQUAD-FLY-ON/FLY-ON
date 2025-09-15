// SelectPlaceScreen.tsx
import { calculatePolygonCentroid } from "@/libs/regionSelectMap";
import { fetchTourism } from "@/libs/schedule/fetchTourism";
import { useScheduleStore } from "@/store/useScheduleStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/shallow";
import PlaceList from "./PlaceList";

export default function SelectPlaceScreen() {
  
  const { selectedRegion, refreshSelectedPlaces } = useScheduleStore(
    useShallow(state => ({ 
      selectedRegion: state.selectedRegion, 
      refreshSelectedPlaces: state.refreshSelectedPlaces 
    }))
  );
  
  const center = calculatePolygonCentroid(selectedRegion.coordinates);
  const pageSize = 10;
  const { 
    data, 
    isLoading, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage,
    error 
  } = useInfiniteQuery({
    queryKey: ['place', selectedRegion.key],
    queryFn: async ({ pageParam = 1 }) => {
      if (pageParam === 1) {
        refreshSelectedPlaces();
      }
      return await fetchTourism({ 
        lat: center?.latitude, 
        lon: center?.longitude, 
        page: pageParam,
        size: pageSize, 
      });
    },
    enabled: !!center,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage);
      // // lastPage가 비어있거나 설정된 페이지 크기보다 작으면 다음 페이지 없음
      if (!lastPage || lastPage.length === 0) return undefined;
      
      if (lastPage.length < pageSize) return undefined;
      
      return allPages.length + 1;
    },
  });

  // 모든 페이지의 데이터를 하나로 합치기
  const flatData = useMemo(() => {
    return data?.pages.flatMap(page => page) || [];
  }, [data]);

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          데이터를 불러오는 중 오류가 발생했습니다.
        </Text>
      </View>
    );
  }

  return (
    <>
      {isLoading ? (
        <View style={styles.centerContainer}>
          <Text style={styles.loadingText}>데이터를 불러오고 있습니다..</Text>
        </View>
      ) : (
        <PlaceList
          title="체험장/장소 선택하기(2/2)"
          description="일정에 추가하고 싶은 장소를 선택해주세요."
          data={flatData}
          onEndReached={() => fetchNextPage()}
          hasNextPage={!!hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontFamily: 'Pretendard-bold'
  },
  errorText: {
    fontSize: 16,
    fontFamily: 'Pretendard-Regular',
    color: '#ff4444',
    textAlign: 'center',
    paddingHorizontal: 20,
  }
});