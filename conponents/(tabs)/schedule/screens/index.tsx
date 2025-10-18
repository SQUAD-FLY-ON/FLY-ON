import { Screens } from "@/constants/screens";
import { useScheduleStore } from "@/store/useScheduleStore";
import { ScreenKey } from "@/types";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import CalanderScreen from "./CalanderScreen";
import CompleteScreen from "./CompleteScreen";
import GenerateScheduleScreen from "./GenerateScheduleScreen";
import AIRecommendScreen from "./PlanScreen/AIRecommendPlanScreen";
import EditPlanScreen from "./PlanScreen/EditPlanScreen";
import SelectActivityScreen from "./SelectPlaceScreen/SelectActivityScreen";
import SelectPlaceScreen from "./SelectPlaceScreen/SelectPlaceScreen";
import SelectRegionScreen from "./SelectRegionScreen";

const ScreenMap: Record<ScreenKey, React.ComponentType<any>> = {
  'SelectDate': CalanderScreen ,
  'SelectAreaRegion': SelectRegionScreen,
  'SelectSubRegion': SelectRegionScreen ,
  'SelectActivity': SelectActivityScreen ,
  'SelectPlace': SelectPlaceScreen ,
  'LoadingGenerateSchedule': GenerateScheduleScreen ,
  'AIRecommendPlan': AIRecommendScreen ,
  'EditPlan': EditPlanScreen ,
  "Complete": CompleteScreen,
};
export default function Screen() {
  const { currentStep ,selectedRegion , refreshSelectedActivities}  = useScheduleStore(useShallow(state => ({currentStep: state.currentStep, selectedRegion: state.selectedRegion, refreshSelectedActivities: state.refreshSelectedActivities})));
  const currentKey = Screens[currentStep].key as keyof typeof ScreenMap;
  useEffect(() => {
    refreshSelectedActivities();
  }, [selectedRegion])
  const ComponentToRender = ScreenMap[currentKey];
  return (<>
    <ComponentToRender/>
  </>)
}