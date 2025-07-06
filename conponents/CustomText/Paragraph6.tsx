import Colors from "@/constants/colors";
import { StyleSheet, Text, TextProps } from "react-native";

const Paragraph6: React.FC<TextProps> = ({ style, children, ...rest }) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Pretendard-Regular",
    fontSize: 12,
    color: Colors.text.text100,
  },
});

export default Paragraph6;
