import { Screens } from "@/constants/screens";
import { useScheduleStore } from "@/store/useScheduleStore";
import SelectAreaRegion from "./SelectAreaRegion";
import SelectSubRegion from "./SelectSubRegion";

export default function RegionSelectScreen() {
  const currentStep = useScheduleStore(state => state.currentStep);
  const currentKey = Screens[currentStep].key;
  return (
    <>
      {currentKey === 'SelectAreaRegion' && <SelectAreaRegion />}
      {currentKey === 'SelectSubRegion' && <SelectSubRegion />}
    </>
  );
}
