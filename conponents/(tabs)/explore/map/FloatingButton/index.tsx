import { MainGradient } from "@/conponents/LinearGradients/MainGradient";
import React, { SetStateAction, useRef } from "react";
import { Animated, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import MenuIcon from "./MenuIcon";

interface MapFloatingButtonProps {
  style?: StyleProp<ViewStyle>;
  setModalVisible: React.Dispatch<SetStateAction<boolean>>;
  modalVisible: boolean;
}
export default function MapFloatingButton({ style, setModalVisible, modalVisible }: MapFloatingButtonProps) {
  const translateY = useRef(new Animated.Value(0)).current;
  const handlePress = () => {
    const translateValue = modalVisible ? 0 : -164;
    setModalVisible(prev=>!prev);
    Animated.timing(translateY, {
      toValue: translateValue, // 음수값으로 위로 이동
      duration: 300, // 애니메이션 지속시간 (밀리초)
      useNativeDriver: true,
    }).start();

  };
  return (<TouchableOpacity
    style={[style, {
      transform: [{ translateY: translateY }],
    },]}
    onPress={handlePress}>
    <MainGradient style={styles.container}>
      <MenuIcon />
    </MainGradient>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
  }
})