import ExploreHeader from "@/conponents/(tabs)/explore/ExploreHeader";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import { useCallback, useMemo, useRef, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Maps() {
  const { loc } = useLocalSearchParams();
  const [coordinates, setCoordinates] = useState({
    latitude: 37.5864315,
    longitude: 127.0462765,
  });
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <BottomSheetModalProvider>
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
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
        >
          <View>
            <Text>Bottom Sheet Modal</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}
