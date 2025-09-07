// /components/schedule/PlaceList.tsx (새 파일)

import { PlaceCardType } from "@/types";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Filter from "../../Filter";
import TitleHeader from "../TitleHeader";
import PlaceCard from "./PlaceCard";


interface PlaceListProps {
  title: string;
  description: string;
  filters: { key: string; text: string }[];
  data: PlaceCardType[]; // 실제로는 Activity 또는 Place 타입으로 지정
}

export default function PlaceList({ title, description, filters, data }: PlaceListProps) {
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