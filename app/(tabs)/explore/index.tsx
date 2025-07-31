import { BackButton } from '@/conponents/BackButton';
import { MainGradient } from '@/conponents/LinearGradients/MainGradient';
import RegionSelect from '@/conponents/RegionSelect';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

// mapstyle.withgoogle.com 에서 생성한 JSON 스타일 코드

export default function Index() {
  const [selectedRegionName, setSelectedRegionName] = useState('');
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton />
      </View>
      <RegionSelect style={{ marginTop: 35 }} selectedRegionName={selectedRegionName} setSelectedRegionName={setSelectedRegionName} />
      <View style={{ width: '100%', paddingHorizontal: 14, alignItems: 'flex-end', marginTop: 16 }}>
        {
          selectedRegionName === '' ? (
            <View style={styles.nextButton}><Image source={require('@/assets/images/explore_right_arrow.png')} /></View>
          ) :
            (
              <TouchableOpacity onPress={() => router.push('/(tabs)/explore/map')}>
                <MainGradient style={styles.nextButton}><Image source={require('@/assets/images/explore_right_arrow.png')} /></MainGradient>
              </TouchableOpacity>
            )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    paddingBottom: 117,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 12,
    left: 16,
  },
  nextButton: {
    width: 56,
    height: 56,
    borderRadius: 999,
    backgroundColor: '#D2D2D2',
    alignItems: 'center',
    justifyContent: 'center',
  }
});