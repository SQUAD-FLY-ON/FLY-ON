// PlaceCard.tsx
import { useScheduleStore } from "@/store/useScheduleStore";
import { TourismItem } from "@/types";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

export default function PlaceCard({data}: {data: TourismItem}) {
  const { selectedPlaces, setSelectedPlaces } = useScheduleStore(
    useShallow(state => ({
      selectedPlaces: state.selectedPlaces,
      setSelectedPlaces: state.setSelectedPlaces,
    }))
  );
  const onPress = () => {
    setSelectedPlaces(data);
  };

  const selected = Array.isArray(selectedPlaces) && 
    selectedPlaces.some(place => place.fullAddress === data.fullAddress);

  return (
    <Pressable 
      onPress={onPress} 
      style={[styles.container, { backgroundColor: selected ? '#ECF4FE' : '#ffffff' }]}
    >
      <Image 
        style={styles.image} 
        source={data?.imgUrl 
          ? { uri: data?.imgUrl } 
          : require('@/assets/images/dummy_image_place.png')
        } 
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.address}>{data.fullAddress}</Text>
      </View>
      {/* <CustomButton 
        containerStyle={styles.buttonPosition} 
        buttonType="small" 
        text="자세히보기" 
        textStyle={{ lineHeight: 14, fontSize: 14 }} 
        onPress={() => {}} 
      /> */}
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    borderColor: '#93BEF9',
    borderWidth: 1,
    borderRadius: 12,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 8.8,
  },
  contentContainer: {
    gap: 4,
  },
  title: {
    // heading4
    fontWeight: 600,
    fontSize: 16,
  },
  address: {
    fontSize: 12,
    color: '#747474',
    fontWeight: 300,
  },
  star: {
    width: 18,
    height: 18,
    marginRight: -3,
  },
  scoreContainer: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    // Paragraph3
    color: '#333333',
    fontSize: 14,
    fontWeight: 600,
  },
  review: {
    fontSize: 12,
    color: '#8E9297',
    fontWeight: 400
  },
  buttonPosition: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  }
})