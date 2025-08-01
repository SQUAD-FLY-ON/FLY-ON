import { BackButton } from '@/conponents/BackButton';
import { getMarkersByRegion } from '@/constants/dummyExploreAreas';
import useExploreStore from '@/store/exploreStore';
import { RegionCode } from '@/types';
import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function Index() {
  const mapRef = useRef<MapView | null>(null);
  const selectedRegion = useExploreStore(state => state.selectedRegion);
  const markers = getMarkersByRegion(selectedRegion?.key as RegionCode);
  return (
    <View style={styles.container}>
      <View style = {styles.header}>
        <BackButton />
        <Text style = {styles.headerText}>{selectedRegion.name}</Text>
      </View>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        userInterfaceStyle={'light'}
        scrollDuringRotateOrZoomEnabled
        onMapReady={() => {
          if (mapRef.current) {
            mapRef.current.fitToCoordinates(selectedRegion?.coordinates, { edgePadding: { top: -10, left: -10, right: -10, bottom: -10, }, animated: false }); // duration 0 = 즉시 이동
          }
        }}
      >
        {
          markers.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}>
              {/* TO-DO: 이후 피그마 디자인 반영하여 수정 */}
              <Callout tooltip={true} >
                <View style={{ backgroundColor: '#FFFFFF' }}>
                  <Text>{marker.title}</Text>
                  <Text>{marker.category}</Text>
                </View>
              </Callout>
            </Marker>
          ))
        }
      </MapView>
      {/* 
      TO-DO: 바텀 시트도 피그마 디자인 반영 혹은 구현x
      <BottomSheet>
        
      </BottomSheet> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 12,
    left: 16,
    gap: 8,
    flexDirection: 'row',
    zIndex:200,
  },
  headerText: {
    fontFamily: 'Pretendard-Semibold',
    fontSize: 24,
    fontWeight: 700,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});