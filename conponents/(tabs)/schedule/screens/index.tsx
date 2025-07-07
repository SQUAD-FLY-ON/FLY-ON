import { useScheduleStore } from "@/store/useScheduleStore";
import CalanderScreen from "./CalanderScreen";

export default function Screen() {
  const currentStep = useScheduleStore(state => state.currentStep);
  return (<>
    {currentStep === 0 && <CalanderScreen />}
  </>)
}