import { calculatePolygonCentroid } from '@/libs/map';
import useExploreStore from '@/store/exploreStore';
import { MarkerSpotApiRequest } from '@/types/api';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useShallow } from 'zustand/shallow';
import ExploreSpotMarkers from './ExploreSpotMarkers';

export default function ExploreMap() {
  const mapRef = useRef<MapView | null>(null);
  const [currentLocation, setCurrentlocation] = useState<MarkerSpotApiRequest | null>(null);
  const { selectedRegion, resetSelectedMarkerSpot } = useExploreStore(useShallow(state => ({ selectedRegion: state.selectedRegion, resetSelectedMarkerSpot: state.resetSelectedMarkerSpot })));
  const latitudes = selectedRegion.coordinates.map(coord => coord.latitude);
  const longitudes = selectedRegion.coordinates.map(coord => coord.longitude);
  const northEast = { latitude: Math.max(...latitudes), longitude: Math.max(...longitudes) };
  const southWest = { latitude: Math.min(...latitudes), longitude: Math.min(...longitudes) };
  const center = calculatePolygonCentroid(selectedRegion.coordinates);
  // 현재 해당하는 지역으로 우선 고정
  // const getBoundaries = async (region: Region) => {
  //   if (mapRef.current) {
  //     const { latitude: cornerLatitude, longitude: cornerLongitude } = northEast;
  //     const { latitude: centerLatitude, longitude: centerLongitude } = region;
  //     setCurrentlocation({ cornerLatitude, cornerLongitude, centerLatitude, centerLongitude })
  //   }
  // };
  useEffect(() => {
    const { latitude: cornerLatitude, longitude: cornerLongitude } = northEast;
    const { latitude: centerLatitude, longitude: centerLongitude } = center;
    setCurrentlocation({ cornerLatitude, cornerLongitude, centerLatitude, centerLongitude })
  }, [selectedRegion])
  const restrictBoundaries = () => {
    if (mapRef.current && selectedRegion?.coordinates.length > 0) {
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
      onMapReady={async () => {
        updateMapRegion();
        restrictBoundaries();
      }}
      onRegionChangeComplete={async (region) => {
        // await getBoundaries(region);
      }}
      onPress={(event) => { 
        if (event.nativeEvent.action !== 'marker-press')
          resetSelectedMarkerSpot();
      }}
    >
      <ExploreSpotMarkers />
      {/* 지도의 범위와 일치 x */}
      {/* <Polygon coordinates={selectedRegion.coordinates} /> */}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
  },
});
