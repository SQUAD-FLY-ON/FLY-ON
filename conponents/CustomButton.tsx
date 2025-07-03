import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { MainGradient } from "./LinearGradients/MainGradient";

interface ButtonProps {
    onPress: () => void;
    text: string;
    buttonType?: 'small' | 'default';
    style?: ViewStyle;
    rightArrow?: boolean;
    bottomArrow?: boolean;
}

export default function CustomButton({ onPress, buttonType = 'default', style, rightArrow = false, bottomArrow = false, text }: ButtonProps) {
    return (
        <Pressable onPress={onPress} style={style}>
            <MainGradient style={buttonType === 'small'?styles.small: styles.default} >

                <Text style={styles.text}>{text}</Text>
                {rightArrow && <MaterialIcons name="keyboard-arrow-right" size={18} color="#ffffff" />}
                {bottomArrow && <Image source={require('@/assets/images/arrow_down.png')} style={{ width: 18, height: 18 }} />}
            </MainGradient>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    small: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 100,
        alignItems: "center",
    },
    default: {
        width: "100%",
        paddingVertical: 16,
        borderRadius: 100,
        justifyContent: "center",

    },
    text: {
        color: "#fff",
        fontSize: 14,
        fontWeight: 400,
        marginRight: 4,
        height: 17,
        lineHeight: 17,
        textAlign: 'center',
    },
});


