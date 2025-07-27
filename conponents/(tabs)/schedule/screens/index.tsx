import { Screens } from "@/constants/screens";
import { useScheduleStore } from "@/store/useScheduleStore";
import CalanderScreen from "./CalanderScreen";
import GenerateScheduleScreen from "./GenerateScheduleScreen";
import AIRecommendScreen from "./PlanScreen/AIRecommendPlanScreen";
import EditPlanScreen from "./PlanScreen/EditPlanScreen";
import SelectPlaceScreen from "./SelectPlaceScreen";

export default function Screen() {
  const currentStep = useScheduleStore(state => state.currentStep);
  return (<>
    {Screens[currentStep].key === 'SelectDate' && <CalanderScreen />}
    {Screens[currentStep].key.includes('SelectPlace') && <SelectPlaceScreen />}
    {Screens[currentStep].key === 'LoadingGenerateSchedule' && <GenerateScheduleScreen />}
    {Screens[currentStep].key === 'AIRecommendPlan' && <AIRecommendScreen />}
    {Screens[currentStep].key === 'EditPlan' && <EditPlanScreen />}
  </>)
}