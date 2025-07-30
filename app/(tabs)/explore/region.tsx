import RegionPolygon from '@/conponents/(tabs)/explore/region/RegionPolygon';
import { customMapStyle, koreaRegion } from '@/constants/(tabs)/explore/region';
import { polygons } from '@/constants/polygons';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// mapstyle.withgoogle.com 에서 생성한 JSON 스타일 코드

export default function Index() {
  const [selectedRegionName, setSelectedRegionName] = useState('')
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={koreaRegion}
        customMapStyle={customMapStyle} // 여기에 JSON 스타일 적용
        region={koreaRegion}
        scrollEnabled={false} // 스크롤 (이동) 비활성화
        zoomEnabled={false}   // 줌 (확대/축소) 비활성화
        pitchEnabled={false}  // 기울기 비활성화
        rotateEnabled={false}
      >
        {
          polygons.map((region) => {
            const regionName = region.properties.CTPRVN_CD;
            return (
              <RegionPolygon
                key={regionName}
                region={region}
                isSelected={selectedRegionName === regionName}
                setSelectedRegionName={setSelectedRegionName} />
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
  calloutContainer: {
    width: 150, // 말풍선 너비
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  calloutTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  calloutDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});