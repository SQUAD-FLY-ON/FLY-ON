import ExploreHeader from "@/conponents/(tabs)/explore/ExploreHeader";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { nearLocations } from "@/dummy/near_locations";
import LocationContainer from "@/conponents/(tabs)/explore/LocationContainer";

export default function Maps() {
  const { loc } = useLocalSearchParams();
  const [coordinates, setCoordinates] = useState({
    latitude: 37.5864315,
    longitude: 127.0462765,
  });
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  return (
    <View style={{ flex: 1, height: 450 }}>
      <MapView
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Marker coordinate={coordinates} />
      </MapView>
      <ExploreHeader text={loc as string} />

      <BottomSheet
        ref={bottomSheetModalRef}
        snapPoints={["25%", "50%", "80%"]}
        enablePanDownToClose={false}
      >
        <BottomSheetView style={{ paddingHorizontal: 15 }}>
          <View style={{ paddingTop: 16, paddingBottom: 13 }}>
            <Text style={styles.bottomSheetTitle}>체험장 추천</Text>
          </View>
          <View>
            <ScrollView contentContainerStyle={styles.contents}>
              {nearLocations.map((v) => (
                <LocationContainer key={v.id} image={v.image} title={v.title} />
              ))}
            </ScrollView>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  bottomSheetTitle: {
    // fontFamily: "Pretendard-Bold",
    fontSize: 24,
    fontWeight: 700,
  },
  contents: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
