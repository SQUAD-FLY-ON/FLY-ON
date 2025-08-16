import { getMarkersByRegion } from '@/constants/dummyExploreAreas';
import useExploreStore from '@/store/exploreStore';
import { RegionCode } from '@/types';
import { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';

export default function ExploreMap() {
  const mapRef = useRef<MapView | null>(null);
  const selectedRegion = useExploreStore(state => state.selectedRegion);
  const markers = getMarkersByRegion(selectedRegion?.key as RegionCode);

  const restrictBoundaries = () => {
    if (mapRef.current && selectedRegion?.coordinates.length > 0) {
      const latitudes = selectedRegion.coordinates.map(coord => coord.latitude);
      const longitudes = selectedRegion.coordinates.map(coord => coord.longitude);
      const northEast = { latitude: Math.max(...latitudes), longitude: Math.max(...longitudes) };
      const southWest = { latitude: Math.min(...latitudes), longitude: Math.min(...longitudes) };
      mapRef.current.setMapBoundaries(northEast, southWest);
    }
  };

  const updateMapRegion = () => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates(selectedRegion.coordinates, {
        edgePadding: { top: 0, right: 0, bottom: 0, left: 0 },
        animated: false,
      });
    }
  };

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      userInterfaceStyle={'light'}
      scrollDuringRotateOrZoomEnabled
      onMapReady={() => {
        updateMapRegion();
        restrictBoundaries();
      }}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
        >
          <Callout tooltip>
            <View style={styles.callout}>
              <Text style={styles.calloutText}>
                {marker.title} {marker.title}
              </Text>
            </View>
          </Callout>
        </Marker>
      ))}
      <Polygon coordinates={selectedRegion.coordinates} />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  callout: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 100,
  },
  calloutText: {
    fontWeight: '400',
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
  },
});
