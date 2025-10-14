import ConfirmModal from "@/conponents/ConfirmModal";
import { fetchSignout } from "@/libs/(tabs)/user/fetchSignout";
import { useAuthStore } from "@/store/useAuthStore";
import { useScheduleStore } from "@/store/useScheduleStore";
import { router } from "expo-router";
import { useState } from "react";
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
  const [isSignoutModalVisible, setIsSignoutModalVisible] = useState(false);
  const [isWithdrawalModalVisible, setIsWithdrawalModalVisible] = useState(false);

  const { logout, clearAuthState } = useAuthStore(
    useShallow((state) => ({
      logout: state.logout,
      clearAuthState: state.clearAuthState,
    }))
  );

  const handleLogout = async () => {
    useScheduleStore.getState().resetAllStates();
    await logout();
    const accessToken = useAuthStore.getState().accessToken;
    if (!accessToken) {
      router.replace("/intro");
    }
    setIsSignoutModalVisible(false);
  };

  const handleWithdrawal = async () => {
    useScheduleStore.getState().resetAllStates();
    const response = await fetchSignout();
    
    if (response?.httpStatusCode === 200) {
      console.log("회원탈퇴 성공");
      clearAuthState();
      router.replace("/intro");
      // 성공 알림은 intro 화면에서 보여주거나 여기서 toast 사용 권장
    } else {
      Alert.alert("오류", "회원탈퇴 처리 중 오류가 발생했습니다.");
    }
    setIsWithdrawalModalVisible(false);
  };

  const onPress = async (name: string, url: string) => {
    if (name === "개인정보처리방침") {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`이 URL을 열 수 없습니다: ${url}`);
      }
    } else if (name === "로그아웃") {
      setIsSignoutModalVisible(true);
    } else if (name === "회원탈퇴") {
      setIsWithdrawalModalVisible(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {menuItem.map((v, idx) => (
          <Pressable
            key={idx}
            style={
              idx !== menuItem.length - 1 ? styles.itemArea : styles.lastItemArea
            }
            onPress={() => onPress(v.name, v.link)}
          >
            <Text style={styles.itemText}>{v.name}</Text>
          </Pressable>
        ))}
      </View>

      {/* 로그아웃 확인 모달 */}
      <ConfirmModal
        isModalVisible={isSignoutModalVisible}
        setIsModalVisible={setIsSignoutModalVisible}
        title="로그아웃"
        description="정말로 로그아웃 하시겠습니까?"
        onPressConfirm={handleLogout}
        pressButtonText="로그아웃"
      />

      {/* 회원탈퇴 확인 모달 */}
      <ConfirmModal
        isModalVisible={isWithdrawalModalVisible}
        setIsModalVisible={setIsWithdrawalModalVisible}
        title="회원탈퇴"
        description="정말로 회원을 탈퇴하시겠습니까?"
        description2="탈퇴 시 모든 데이터가 삭제됩니다."
        onPressConfirm={handleWithdrawal}
        pressButtonText="회원탈퇴"
      />
    </>
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
