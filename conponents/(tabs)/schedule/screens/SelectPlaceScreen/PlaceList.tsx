// /components/schedule/PlaceList.tsx (새 파일)

import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Filter from "../../Filter";
import TitleHeader from "../TitleHeader";
import PlaceCard from "./PlaceCard";

interface PlaceListProps {
  title: string;
  description: string;
  filters: { key: string; text: string }[];
  data: any[]; // 실제로는 Activity 또는 Place 타입으로 지정
  onSelect: (id: number) => void;
  selectedId: number;
}

export default function PlaceList({ title, description, filters, data, onSelect, selectedId }: PlaceListProps) {
  const [currentFilter, setCurrentFilter] = useState(filters[0]?.key || '');

  return (
    <View style={{ flex: 1 }}>
      <TitleHeader title={title} description={description} />
      <Filter filters={filters} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
      <FlatList
        style={{ marginVertical: 14 }}
        contentContainerStyle={styles.placeContainer}
        data={data}
        renderItem={({ item }) =>
          <PlaceCard
            key={item.id}
            onPress={() => onSelect(item.id)}
            selected={item.id === selectedId}
            {...item} 
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  placeContainer: {
    gap: 8,
  }
})