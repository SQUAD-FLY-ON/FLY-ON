import { useScheduleStore } from "@/store/useScheduleStore";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { useShallow } from "zustand/shallow";

export function ScheduleBackButton() {
    const {currentStep, goToPrevStep} =useScheduleStore(useShallow(state => ({currentStep:state.currentStep, goToPrevStep:state.goToPrevStep})))
    const isFirst = currentStep === 0;
    const router = useRouter();
    const backButtonPress = () => {
        if(isFirst) {
            router.back();
            return;
        }
        goToPrevStep();
    }
    return (<Pressable onPress = {() => {backButtonPress();}} style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
        <Entypo name="chevron-left" size={26.67} color="black" />
    </Pressable>)
}