import { LinearGradient } from 'expo-linear-gradient';
import { TabTriggerSlotProps } from "expo-router/ui";
import { Image, Pressable, StyleSheet } from "react-native";
export default function AirFloatingButton({ isFocused, ...props }: TabTriggerSlotProps) {
    return (
        <LinearGradient
            colors={['#3A88F4', '#84B8FF']}
            start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Pressable {...props} >

                <Image source={require("@/assets/images/floatingButtonImage.png")} />
            </Pressable>
        </LinearGradient>

    )


}

const styles = StyleSheet.create({
    container: {
        padding: 18,
        borderRadius: 999,
        zIndex: 200,
        marginTop: -40,
    }
})