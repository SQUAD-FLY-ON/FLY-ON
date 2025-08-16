import ExploreMap from '@/conponents/(tabs)/explore/map/ExploreMapView';
import ExploreModal from '@/conponents/(tabs)/explore/map/ExploreModal';
import MapFloatingButton from '@/conponents/(tabs)/explore/map/FloatingButton';
import { BackButton } from '@/conponents/BackButton';
import useExploreStore from '@/store/exploreStore';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const selectedRegion = useExploreStore(state => state.selectedRegion);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerText}>{selectedRegion.name}</Text>
      </View>
      <ExploreMap />
      <MapFloatingButton modalVisible={modalVisible} setModalVisible={setModalVisible} style={styles.floatButtonPosition} />
      {modalVisible && <ExploreModal/>}
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
  },
});
