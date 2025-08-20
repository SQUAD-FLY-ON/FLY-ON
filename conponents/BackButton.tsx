import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export function BackButton() {
    const router = useRouter();
    return (
        <Pressable onPress={() => { router.back() }} style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
            <Entypo name="chevron-left" size={26.67} color="black" />
        </Pressable>)
}