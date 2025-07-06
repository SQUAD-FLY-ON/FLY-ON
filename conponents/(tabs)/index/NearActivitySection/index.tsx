import ActivityAreaCard from "@/conponents/ActivityAreaCard";
import Carousel from "@/conponents/Carousel";
import ArrowDownIcon from "@/conponents/icons/DownArrow";
import { activities } from "@/dummy/activity_area";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FilterModal from "./FilterModal";
import Colors from "@/constants/colors";

const filterOptions = [
  { key: "near", label: "가까운 체험장 추천" },
  { key: "sunny", label: "맑은 지역 체험장 추천" },
];

export default function NearActivity() {
  const filterModalRef = useRef<BottomSheetModal>(null);
  const [currentKey, setCurrentKey] = useState("near");
  const handlePresentModalPress = useCallback(() => {
    filterModalRef.current?.present();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Pressable onPress={handlePresentModalPress}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>
              {filterOptions.find((value) => value.key === currentKey)?.label}
            </Text>
            <ArrowDownIcon size={18} />
          </View>
        </Pressable>
        <Link href={"/explore"}>
          <Text style={styles.link}>체험장 탐색하기</Text>
        </Link>
      </View>
      <Carousel
        data={activities}
        renderItem={(item) => <ActivityAreaCard item={item} />}
        style={{ paddingLeft: 16, marginBottom: 32 }}
      />
      <FilterModal
        ref={filterModalRef}
        options={filterOptions}
        currentKey={currentKey}
        setCurrentKey={setCurrentKey}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    marginTop: 48,
  },
  titleContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  title: {
    fontFamily: "Pretendard-Bold",
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 26,
  },
  link: {
    fontFamily: "Pretendard-Regular",
    fontSize: 12,
    textDecorationLine: "underline",
    color: Colors.text.text50,
  },
  modalTitle: {
    fontFamily: "Pretendard",
    fontWeight: 700,
    fontSize: 22,
  },
  modalRadios: {
    paddingHorizontal: 6,
  },
  modalButton: {
    marginTop: 27,
  },
});
