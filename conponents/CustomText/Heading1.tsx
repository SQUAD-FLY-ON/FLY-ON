import Colors from "@/constants/colors";
import { StyleSheet, Text, TextProps } from "react-native";

const Heading1: React.FC<TextProps> = ({ style, children, ...rest }) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Pretendard-Bold",
    fontSize: 24,
    color: Colors.text.text100,
  },
});

export default Heading1;
