import { MarkerSpot, selectedRegion } from '@/types';
import { create } from 'zustand';

type ExploreStoreState = { selectedRegion: selectedRegion; selectedMarkerSpot: MarkerSpot }

type ExploreStoreActions = {
  setSelectedRegion: (newRegion: selectedRegion) => void;
  setSelectedMarkerSpot: (newSpot: MarkerSpot) => void;
  resetSelectedMarkerSpot: () => void;
}

type ExploreStore = ExploreStoreState & ExploreStoreActions

const useExploreStore = create<ExploreStore>((set) => ({
  selectedRegion: {
    key: '',
    name: '',
    coordinates: [],
  },
  selectedMarkerSpot: {
    id: '',
    name: '',
    fullAddress: '',
    imgUrl: '',
    latitude: 0,
    longitude: 0,
  },
  setSelectedRegion: (newRegion) =>
    set({
      selectedRegion: newRegion,
    }),
  setSelectedMarkerSpot: (newSpot) =>
    set({
      selectedMarkerSpot: newSpot,
    }),
  resetSelectedMarkerSpot: () =>
    set({
      selectedMarkerSpot: {
        id: '',
        name: '',
        fullAddress: '',
        imgUrl: '',
        latitude: 0,
        longitude: 0,
      },
    }),
}));

export default useExploreStore;