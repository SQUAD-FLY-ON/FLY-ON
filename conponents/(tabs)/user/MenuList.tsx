import { useRouter } from "expo-router";
import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type TMenuItem = {
  name: string;
  link: string;
};

const MenuList = ({ menuItem }: { menuItem: TMenuItem[] }) => {
  const onPress = async (idx: number) => {
    console.log(menuItem[idx].link);
    const url = menuItem[idx].link;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`이 URL을 열 수 없습니다: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      {Array(2)
        .fill(0)
        .map((_, idx) => (
          <Pressable
            key={idx}
            style={
              idx !== menuItem.length - 1
                ? styles.itemArea
                : styles.lastItemArea
            }
            onPress={() => onPress(idx)}
          >
            <Text style={styles.itemText}>{menuItem[idx].name}</Text>
          </Pressable>
        ))}
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginTop: 13,
  },
  itemArea: {
    paddingVertical: 17,
    paddingHorizontal: 9,
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(208, 208, 208, 0.50)",
  },
  lastItemArea: {
    paddingVertical: 16,
    paddingHorizontal: 9,
    backgroundColor: "#fff",
  },
  itemText: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 18,
  },
});
