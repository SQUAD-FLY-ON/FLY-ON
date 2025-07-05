import AntDesign from '@expo/vector-icons/AntDesign';
import { TabTriggerSlotProps } from "expo-router/ui";
import { Pressable, StyleSheet } from "react-native";
import { MainGradient } from '../LinearGradients/MainGradient';
export default function CreateFloatingButton({ isFocused, ...props }: TabTriggerSlotProps) {
    return (
        <MainGradient
            style={styles.container}
        >
            <Pressable {...props} >
                <AntDesign name="plus" size={16} color="white" />
            </Pressable>
        </MainGradient>

    )


}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 999,
        zIndex: 200,
        position: 'absolute',
        right: 16,
        bottom: '100%',
        marginBottom: 16
    }
})