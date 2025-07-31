import { flyOffFillColor, flyOnFillColor } from '@/constants/regionSelectMap';
import React, { SetStateAction } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import RegionSelectMapView from './RegionSelectMapView';

// mapstyle.withgoogle.com 에서 생성한 JSON 스타일 코드

export interface RegionSelectProps {
  style?: ViewStyle 
  selectedRegionName: string;
  setSelectedRegionName: React.Dispatch<SetStateAction<string>>;
}
export default function RegionSelect({style, selectedRegionName, setSelectedRegionName}:RegionSelectProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>체험장 탐색하기</Text>
      <View style={{ gap: 5, alignItems: 'center', marginTop: 16 }}>
        <Text style={styles.guideText}>이번주 날씨 기준 적합한 지역을 알려드려요</Text>
        <View style={styles.iconsRowContainer}>
          <View style={styles.iconRow}>
            <View style={[styles.square, { backgroundColor: `${flyOffFillColor}` }]}></View>
            <Text style={styles.iconText}>FLY:OFF 지역</Text>
          </View>
          <View style={styles.iconRow}>
            <View style={[styles.square, { backgroundColor: `${flyOnFillColor}` }]}></View>
            <Text style={styles.iconText}>FLY:ON 지역</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 17, width: '100%' }}>
        <RegionSelectMapView selectedRegionName = {selectedRegionName} setSelectedRegionName = {setSelectedRegionName}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  title: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 24,
    fontWeight: 700,
  },
  guideText: {
    color: '#747474',
    fontFamily: 'Pretendard-Regular',

  },
  iconsRowContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  square: {
    width: 10,
    height: 10,
  },
  iconText: {
    fontFamily: 'Pretendard-Regular',
    color: '#000000',
    height: 17,
    lineHeight: 17,
  }
});