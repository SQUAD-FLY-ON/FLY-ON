import ExploreMap from '@/conponents/(tabs)/explore/map/ExploreMapView';
import ExploreModal from '@/conponents/(tabs)/explore/map/ExploreModal';
import MapFloatingButton from '@/conponents/(tabs)/explore/map/FloatingButton';
import { BackButton } from '@/conponents/BackButton';
import useExploreStore from '@/store/exploreStore';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useShallow } from 'zustand/shallow';

export default function Index() {
  const {selectedRegion, selectedMarkerSpot} = useExploreStore(useShallow(state => ({selectedRegion: state.selectedRegion, selectedMarkerSpot: state.selectedMarkerSpot})));
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerText}>{selectedRegion.name}</Text>
      </View>
      <ExploreMap />
      <MapFloatingButton onPress={() => {router.push('/(tabs)/explore/explore-list')}} style={styles.floatButtonPosition} />
      {selectedMarkerSpot.id && <ExploreModal/>}
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
    zIndex: 200,
  },
  headerText: {
    fontFamily: 'Pretendard-Semibold',
    fontSize: 24,
    fontWeight: '700',
  },
  floatButtonPosition: {
    position: 'absolute',
    bottom: 96,
    right: 24,
    zIndex:999,
  },
});
