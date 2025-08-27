import { Screens } from '@/constants/screens';
import { selectedRegion } from '@/types';
import { create } from 'zustand';

interface ScheduleStore {
  currentMarkedDates: Record<string, any>;
  setCurrentMarkedDates: (currentMarkedDates: Record<string, any>) => void;
  currentStep: number;
  selectedRegion: selectedRegion;
  setSelectedRegion: (region: selectedRegion) => void;
  goToPrevStep: () => void;
  goToNextStep: () => void;
}

export const useScheduleStore = create<ScheduleStore>((set) => ({
  currentMarkedDates: {},
  setCurrentMarkedDates: (currentMarkedDates) => set({ currentMarkedDates: currentMarkedDates }),
  currentStep: 0,
  selectedRegion: {key: '', name: '', coordinates: []},
  setSelectedRegion:(selectedRegion) => set({selectedRegion: selectedRegion}),
  goToPrevStep: () => set((state) => ({
    currentStep: Screens[state.currentStep - 1].key.includes('Loading') ? state.currentStep - 2 : state.currentStep - 1,
  })),
  goToNextStep: () => set((state) => ({
    currentStep: state.currentStep + 1,
  })),
}));
