import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { MainGradient } from "./LinearGradients/MainGradient";

interface ButtonProps {
    onPress: () => void;
    text: string;
    buttonType?: 'small' | 'default';
    backgroundColor?: string;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    textStyle?: TextStyle,
    rightArrow?: boolean;
    bottomArrow?: boolean;
    undo?: boolean;
}

export default function CustomButton({ onPress, buttonType = 'default', backgroundColor = 'main', containerStyle, style, textStyle, rightArrow = false, bottomArrow = false, undo = false, text }: ButtonProps) {
    const Wrapper = backgroundColor !== 'main' ? View : MainGradient;
    return (
        <Pressable onPress={onPress} style={containerStyle}>
            <Wrapper style={[
                buttonType === 'small' && styles.small,
                buttonType === 'default' && styles.default,
                { backgroundColor: backgroundColor }, style]} >
                {undo && <Image source={require('@/assets/images/undo.png')} style={{ width: 20, height: 20 }} />}

                <Text style={[styles.text, textStyle]}>{text}</Text>

                {rightArrow && <MaterialIcons name="keyboard-arrow-right" size={18} color="#ffffff" />}
                {bottomArrow && <Image source={require('@/assets/images/arrow_down.png')} style={{ width: 18, height: 18 }} />}
            </Wrapper>
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
        paddingVertical: 16,
        flexDirection: "row",
        borderRadius: 12,
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: 14,
        fontWeight: 400,
        marginRight: 4,
        textAlign: 'center',
    },
});


