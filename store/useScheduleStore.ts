import { Screens } from '@/constants/screens';
import { selectedRegion, Spot, TourismItem } from '@/types';
import { create } from 'zustand';

export interface ScheduleState {
  currentStep: number;
  currentMarkedDates: Record<string, any>;
  selectedRegion: selectedRegion;
  selectedPlaces: TourismItem[];
  selectedActivities: Spot;
}

/**
 * 상태를 변경하는 함수(액션)들의 타입입니다.
 */
export interface ScheduleActions {
  setCurrentMarkedDates: (dates: Record<string, any>) => void;
  setSelectedRegion: (region: selectedRegion) => void;
  setSelectedPlaces: (places: TourismItem) => void;
  setSelectedActivities: (activity: Spot) => void;
  goToPrevStep: () => void;
  goToNextStep: () => void;
  refreshSelectedActivities: () => void;
  refreshSelectedPlaces: () => void;
}

export const useScheduleStore = create<ScheduleState & ScheduleActions>((set, get) => ({
  currentStep: 0,

  currentMarkedDates: {},
  setCurrentMarkedDates: (dates) => {
    set({ currentMarkedDates: dates });
  },
  selectedRegion: { key: '', name: '', coordinates: [] },
  setSelectedRegion: (region) => set({ selectedRegion: region }),
  selectedActivities: {
  id: '',
  imgUrl: '',
  latitude: 0,
  longitude: 0,
  name: '',
  fullAddress: ''
},
  setSelectedActivities: (activity) => set({ selectedActivities: activity }),
  selectedPlaces: [],
  setSelectedPlaces: (place) =>
    set((state) => {
      const isAlreadySelected = state.selectedPlaces.some(
        (activity) => activity.fullAddress === place.fullAddress
      );

      if (isAlreadySelected) {
        return {
          selectedPlaces: state.selectedPlaces.filter(
            (activity) => activity.fullAddress !== place.fullAddress
          ),
        };
      } else {
        return {
          selectedPlaces: [...state.selectedPlaces, place],
        };
      }
    }),
  refreshSelectedPlaces: () => {
    set({ selectedPlaces: [] });
  },

  // selectedActivities를 초기 상태로 리셋하는 함수
  refreshSelectedActivities: () => {
    set({
      selectedActivities: {
        id: '',
        imgUrl: '',
        latitude: 0,
        longitude: 0,
        name: '',
        fullAddress: ''
      }
    });
  },

  goToPrevStep: () => set((state) => ({
    currentStep: Screens[state.currentStep - 1].key.includes('Loading') ? state.currentStep - 2 : state.currentStep - 1,
  })),

  goToNextStep: () => {
    set((state) => ({ currentStep: state.currentStep + 1 }));
  },
}));