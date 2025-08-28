import { Screens } from '@/constants/screens';
import { selectedRegion } from '@/types';
import { create } from 'zustand';


interface SelectedPlace {
  id: number;
  name: string;
  // ...
}

export interface ScheduleState {
  currentStep: number;
  currentMarkedDates: Record<string, any>;
  selectedRegion: selectedRegion;
  selectedPlaces: SelectedPlace[];
}

/**
 * 상태를 변경하는 함수(액션)들의 타입입니다.
 */
export interface ScheduleActions {
  setCurrentMarkedDates: (dates: Record<string, any>) => void;
  setSelectedRegion: (region: selectedRegion) => void;
  setSelectedPlaces: (places: SelectedPlace[]) => void;
  goToPrevStep: () => void;
  goToNextStep: () => void;
}

// 4. 스토어 구현 수정
export const useScheduleStore = create<ScheduleState & ScheduleActions>((set, get) => ({
  currentStep: 0,

  currentMarkedDates: {},
  setCurrentMarkedDates: (dates) => {
    console.log('setCurrentMarkedDates 호출됨!', dates); // <-- 로그 추가
    set({ currentMarkedDates: dates });
  },
  selectedRegion: { key: '', name: '', coordinates: [] },
  setSelectedRegion: (region) => set({ selectedRegion: region }),

  selectedPlaces: [],
  setSelectedPlaces: (places) => set({ selectedPlaces: places }),

  goToPrevStep: () => set((state) => ({
    currentStep: Screens[state.currentStep - 1].key.includes('Loading') ? state.currentStep - 2 : state.currentStep - 1,
  })),

  goToNextStep: () => {
    set((state) => ({ currentStep: state.currentStep + 1 }));
  },
}));