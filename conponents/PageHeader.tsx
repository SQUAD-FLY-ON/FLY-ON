import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, View } from "react-native";

const PageHeader = ({
  isFirst = false,
  title,
}: {
  isFirst?: boolean;
  title: string;
}) => {
  return (
    <View style={styles.container}>
      {!isFirst && (
        <MaterialIcons
          name="keyboard-arrow-left"
          size={19}
          color="#333"
          style={styles.arrow}
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 17,
    flexDirection: "row",
    width: "100%",
  },
  arrow: {
    marginRight: 6,
  },
  title: {
    paddingLeft: 6,
    fontFamily: "Pretendard-Bold",
    fontSize: 24,
  },
});
