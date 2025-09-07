import Entypo from "@expo/vector-icons/Entypo";
import { View } from "react-native";

export function BackButton() {
    return (<View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
        <Entypo name="chevron-left" size={26.67} color="black" />
    </View>)
}