import { Screens } from '@/constants/screens';
import { SelectedPlace, selectedRegion } from '@/types';
import { create } from 'zustand';

export interface ScheduleState {
  currentStep: number;
  currentMarkedDates: Record<string, any>;
  selectedRegion: selectedRegion;
  selectedPlaces: SelectedPlace[];
  selectedActivities: SelectedPlace[];
}

/**
 * 상태를 변경하는 함수(액션)들의 타입입니다.
 */
export interface ScheduleActions {
  setCurrentMarkedDates: (dates: Record<string, any>) => void;
  setSelectedRegion: (region: selectedRegion) => void;
  setSelectedPlaces: (places: SelectedPlace) => void;
  setSelectedActivities: (places: SelectedPlace) => void;
  goToPrevStep: () => void;
  goToNextStep: () => void;
}

export const useScheduleStore = create<ScheduleState & ScheduleActions>((set, get) => ({
  currentStep: 0,

  currentMarkedDates: {},
  setCurrentMarkedDates: (dates) => {
    console.log('setCurrentMarkedDates 호출됨!', dates); // <-- 로그 추가
    set({ currentMarkedDates: dates });
  },
  selectedRegion: { key: '', name: '', coordinates: [] },
  setSelectedRegion: (region) => set({ selectedRegion: region }),

  selectedActivities: [],
  setSelectedActivities: (place) =>
    set((state) => {
      const isAlreadySelected = state.selectedActivities.some(
        (activity) => activity.id === place.id
      );

      if (isAlreadySelected) {
        return {
          selectedActivities: state.selectedActivities.filter(
            (activity) => activity.id !== place.id
          ),
        };
      } else {
        return {
          selectedActivities: [...state.selectedActivities, place],
        };
      }
    }),

  selectedPlaces: [],
  setSelectedPlaces: (place) =>
    set((state) => {
      const isAlreadySelected = state.selectedPlaces.some(
        (activity) => activity.id === place.id
      );

      if (isAlreadySelected) {
        return {
          selectedPlaces: state.selectedPlaces.filter(
            (activity) => activity.id !== place.id
          ),
        };
      } else {
        return {
          selectedPlaces: [...state.selectedPlaces, place],
        };
      }
    }),

  goToPrevStep: () => set((state) => ({
    currentStep: Screens[state.currentStep - 1].key.includes('Loading') ? state.currentStep - 2 : state.currentStep - 1,
  })),

  goToNextStep: () => {
    set((state) => ({ currentStep: state.currentStep + 1 }));
  },
}));