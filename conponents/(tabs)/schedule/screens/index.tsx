import { Screens } from "@/constants/screens";
import { useScheduleStore } from "@/store/useScheduleStore";
import { ScreenKey } from "@/types";
import CalanderScreen from "./CalanderScreen";
import GenerateScheduleScreen from "./GenerateScheduleScreen";
import AIRecommendScreen from "./PlanScreen/AIRecommendPlanScreen";
import EditPlanScreen from "./PlanScreen/EditPlanScreen";
import SelectPlaceScreen from "./SelectPlaceScreen";
import SelectRegionScreen from "./SelectRegionScreen";
type ScreenComponent = React.JSX.Element;

const ScreenMap: Record<ScreenKey, ScreenComponent> = {
  'SelectDate': <CalanderScreen />,
  'SelectAreaRegion': <SelectRegionScreen />,
  'SelectSubRegion': <SelectRegionScreen />,
  'SelectPlace1': <SelectPlaceScreen />,
  'SelectPlace2': <SelectPlaceScreen />,
  'LoadingGenerateSchedule': <GenerateScheduleScreen />,
  'AIRecommendPlan': <AIRecommendScreen />,
  'EditPlan': <EditPlanScreen />,
};
export default function Screen() {
  const currentStep = useScheduleStore(state => state.currentStep);
  const currentKey = Screens[currentStep].key as keyof typeof ScreenMap;
  console.log(currentKey);
  const ComponentToRender: React.JSX.Element = ScreenMap[currentKey];
  return (<>
    {ComponentToRender}
  </>)
}