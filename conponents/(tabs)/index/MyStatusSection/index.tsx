import { StyleSheet, Text, View } from "react-native";
import HomeImage from "./AnimatedImages/HomeImage";
import TravelCard from "./TravelCard/TravelCard";
import Colors from "@/constants/colors";
import LevelBadge from "@/conponents/LevelBadge";
import { useEffect, useState } from "react";
import { fetchMembers } from "@/libs/fetchMember";
import { ApiResponse } from "@/types/api";
import Logo from "@/conponents/icons/Logo";

interface MemberInfo {
  nickname: string;
  gliderBadge: string;
  badgeAltitude: number;
  totalJumpAltitude: number;
}

export default function MyStatusSection() {
  const [memberInfo, setMemberInfo] = useState<MemberInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getMemberInfo = async () => {
    try {
      const response: ApiResponse<MemberInfo> = await fetchMembers();
      setMemberInfo(response.data);
    } catch (err: any) {
      setError(err.message || "에러 발생");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMemberInfo();
  }, []);

  return (
    <View style={styles.myStatus}>
      {/* 비행고도 기록 */}
      <View style={{ alignItems: "flex-start" }}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <LevelBadge text={`${memberInfo?.gliderBadge} 글라이더`} />

        <Text style={styles.userName}>
          <Text style={styles.userNameText}>
            {memberInfo?.nickname ? memberInfo.nickname : "날으는 강아지"}
          </Text>
          <Text style={styles.userNameSuffixText}>님</Text>
        </Text>
      </View>
      {/* 이미지 요소 */}
      <HomeImage />
      {/* 나의 일정 카드리스트 */}
      <TravelCard />
    </View>
  );
}

const styles = StyleSheet.create({
  myStatus: {
    padding: 16,
  },
  logo: {
    marginTop: 12,
    marginBottom: 14,
  },
  gliderView: {
    backgroundColor: Colors.main,
    borderRadius: 100,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginTop: 14,
  },
  gliderText: {
    fontFamily: "Pretendard-Regular",
    fontSize: 12,
    color: "#fff",
  },
  userName: {
    marginTop: 12,
    marginLeft: 11,
  },
  userNameText: {
    color: Colors.text.text100,
    fontFamily: "Pretendard-Bold",
    fontSize: 24,
    marginRight: 4,
  },
  userNameSuffixText: {
    color: Colors.text.text100,
    fontFamily: "Pretendard-Regular",
    fontSize: 20,
  },
});
