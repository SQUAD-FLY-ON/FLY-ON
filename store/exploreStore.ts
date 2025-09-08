import { selectedRegion } from '@/types';
import { create } from 'zustand';

type ExploreStoreState = { selectedRegion: selectedRegion }

type ExploreStoreActions = {
  setSelectedRegion: (newRegion: selectedRegion) => void;
}

type ExploreStore = ExploreStoreState & ExploreStoreActions 

const useExploreStore = create<ExploreStore>((set) => ({
  selectedRegion: {
    key:'',
    name: '',
    coordinates: [],
  },
  setSelectedRegion: (newRegion) =>
    set({
      selectedRegion: newRegion,
    }),
}));

export default useExploreStore;