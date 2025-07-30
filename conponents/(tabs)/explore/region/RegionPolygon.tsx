import { defaultFillColor, defaultStrokeColor, selectedFillColor } from '@/constants/(tabs)/explore/region';
import { calculatePolygonCentroid, convertCoordinatesToPoints } from '@/libs/(tabs)/explore';
import React, { SetStateAction } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LatLng, Marker, Polygon } from 'react-native-maps';

type Region = {
  geometry: {
    coordinates: any;
  };
  properties: {
    CTPRVN_CD: string;
    CTP_KOR_NM: string;
  };
};

type RegionPolygonProps = {
  region: Region;
  isSelected: boolean;
  setSelectedRegionName: React.Dispatch<SetStateAction<string>>;
};

const RegionPolygon = ({
  region,
  isSelected,
  setSelectedRegionName,
}: RegionPolygonProps) => {
  const coordinates: LatLng[] = convertCoordinatesToPoints(region.geometry.coordinates);

  if (coordinates.length === 0) return null;

  const center = calculatePolygonCentroid(coordinates);
  const regionName = region.properties.CTPRVN_CD ?? '지역이름없음';

  return (
    <>
      <Polygon
        coordinates={coordinates}
        fillColor={isSelected ? selectedFillColor : defaultFillColor}
        strokeColor={isSelected ? selectedFillColor : defaultStrokeColor
        }
        strokeWidth={isSelected ? 2 : 1}
        tappable
        onPress={() => {
          if (isSelected) {
            setSelectedRegionName('')
          } else {
            setSelectedRegionName(regionName);
          }
        }}
      />
      {isSelected && center && (
        <Marker coordinate={center} anchor={{ x: 0.5, y: 0.5 }}>
          <View style={styles.centerTextContainer}>
            <Text style={styles.centerText}>{region.properties.CTP_KOR_NM}</Text>
          </View>
        </Marker>
      )}
    </>
  );
};

export default RegionPolygon;

const styles = StyleSheet.create({
  centerTextContainer: {
    backgroundColor: '#007AFF', // 이미지와 유사한 파란색
    borderRadius: 20, // 둥근 모서리
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    // iOS 그림자 효과 (Android는 elevation 사용)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centerText: {
    color: '#FFFFFF', // 흰색 텍스트
    fontSize: 14,
    fontWeight: 'bold',
    // 텍스트에 약간의 그림자 효과를 주어 더 잘 보이게
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
})
