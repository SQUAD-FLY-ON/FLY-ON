// /components/schedule/PlaceList.tsx
import { TourismItem } from "@/types";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import TitleHeader from "../TitleHeader";
import PlaceCard from "./PlaceCard";

interface PlaceListProps {
  title: string;
  description: string;
  data: TourismItem[];
  onEndReached: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export default function PlaceList({ 
  title, 
  description, 
  data, 
  onEndReached, 
  hasNextPage, 
  isFetchingNextPage 
}: PlaceListProps) {
  
  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    
    return (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="small" color="#666" />
        <Text style={styles.footerText}>더 많은 장소를 불러오는 중...</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <TitleHeader title={title} description={description} />
      <FlatList
        style={{ marginVertical: 14 }}
        contentContainerStyle={styles.placeContainer}
        data={data}
        renderItem={({ item, index }) => (
          <PlaceCard
            key={`${item.id || index}`} // id가 있다면 사용, 없으면 index
            data={item}
          />
        )}
        keyExtractor={(item, index) => `${item.id || index}`}
        onEndReached={hasNextPage ? onEndReached : undefined}
        onEndReachedThreshold={0.5} // 50% 지점에서 트리거
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  placeContainer: {
    gap: 8,
  },
  footerLoader: {
    paddingVertical: 20,
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Pretendard-Regular'
  }
});