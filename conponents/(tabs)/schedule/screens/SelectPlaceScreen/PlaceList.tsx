// /components/schedule/PlaceList.tsx (새 파일)

import { TourismItem } from "@/types";
import { FlatList, StyleSheet, View } from "react-native";
import TitleHeader from "../TitleHeader";
import PlaceCard from "./PlaceCard";


interface PlaceListProps {
  title: string;
  description: string;
  data: TourismItem[]; // 실제로는 Activity 또는 Place 타입으로 지정
}

export default function PlaceList({ title, description, data }: PlaceListProps) {
 
  return (
    <View style={{ flex: 1 }}>
      <TitleHeader title={title} description={description} />
      <FlatList
        style={{ marginVertical: 14 }}
        contentContainerStyle={styles.placeContainer}
        data={data}
        renderItem={({ item,index }) =>
          <PlaceCard
            key={index}
            data = {item}
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