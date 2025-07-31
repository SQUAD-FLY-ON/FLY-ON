import RegionPolygon from '@/conponents/RegionSelect/RegionSelectMapView/RegionPolygon';
import { polygons } from '@/constants/polygons';
import { customMapStyle, koreaRegion } from '@/constants/regionSelectMap';
import { useFocusEffect } from 'expo-router';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { RegionSelectProps } from '..';

// mapstyle.withgoogle.com 에서 생성한 JSON 스타일 코드

export default function RegionSelectMapView({ selectedRegionName, setSelectedRegionName }: RegionSelectProps) {
  const mapRef = useRef<MapView>(null);

  useFocusEffect(
    React.useCallback(() => {
      // 화면이 활성화될 때마다 지도를 고정된 위치로 애니메이션하여 이동
      if (mapRef.current) {
        mapRef.current.setRegion(koreaRegion); // duration 0 = 즉시 이동
        console.log('korea', koreaRegion);
      }
      return () => {
      };
    }, [mapRef, koreaRegion])
  );
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region ={koreaRegion}
        customMapStyle={customMapStyle} // 여기에 JSON 스타일 적용
        scrollEnabled={false} // 스크롤 (이동) 비활성화
        zoomEnabled={false}   // 줌 (확대/축소) 비활성화
        pitchEnabled={false}  // 기울기 비활성화
        rotateEnabled={false}
        moveOnMarkerPress={false}
      >
        {
          polygons.map((region) => {
            const regionName = region.properties.CTPRVN_CD;
            const isSelected = selectedRegionName === regionName
            return (
              <RegionPolygon
                key={regionName}
                region={region}
                isSelected={isSelected}
                onPress={() => {
                  if (isSelected) {
                    setSelectedRegionName('')
                  } else {
                    setSelectedRegionName(regionName);
                  }
                }} />
            )
          })}
      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});