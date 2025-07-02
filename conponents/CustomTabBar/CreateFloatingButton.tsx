import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { TabTriggerSlotProps } from "expo-router/ui";
import { Pressable, StyleSheet } from "react-native";
export default function CreateFloatingButton({ isFocused, ...props }: TabTriggerSlotProps) {
    return (
        <LinearGradient
            colors={['#3A88F4', '#84B8FF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Pressable {...props} >
                <AntDesign name="plus" size={16} color="white" />
            </Pressable>
        </LinearGradient>

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