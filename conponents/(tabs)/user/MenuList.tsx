import { fetchSignout } from "@/libs/(tabs)/user/fetchSignout";
import { useAuthStore } from "@/store/useAuthStore";
import { router, useRouter } from "expo-router";
import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useShallow } from "zustand/shallow";

type TMenuItem = {
  name: string;
  link: string;
};

const MenuList = ({ menuItem }: { menuItem: TMenuItem[] }) => {
  const { logout, clearAuthState } = useAuthStore(
    useShallow((state) => ({
      logout: state.logout,
      clearAuthState: state.clearAuthState,
    }))
  );
  const onPress = async (name: string, url: string) => {
    if (name === "개인정보처리방침") {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`이 URL을 열 수 없습니다: ${url}`);
      }
    } else if (name === "로그아웃") {
      const response = await logout();
      const accessToken = useAuthStore.getState().accessToken;
      if (!accessToken) {
        router.replace("/intro");
      }
    } else if (name === "회원탈퇴") {
      const response = await fetchSignout();
      console.log(response);
      if (response?.httpStatusCode === 200) {
        console.log("회원탈퇴 성공");
        Alert.alert("회원탈퇴가 완료되었습니다");
        clearAuthState();
        router.replace("/intro");
      }
    }
  };

  return (
    <View style={styles.container}>
      {menuItem.map((v, idx) => (
        <Pressable
          key={idx}
          style={
            idx !== menuItem.length - 1 ? styles.itemArea : styles.lastItemArea
          }
          onPress={() => onPress(v.name, v.link)}
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
