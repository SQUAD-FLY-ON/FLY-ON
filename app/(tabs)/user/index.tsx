import Level from "@/conponents/(tabs)/user/Level";
import MenuList from "@/conponents/(tabs)/user/MenuList";
import Profile from "@/conponents/(tabs)/user/Profile";
import PageHeader from "@/conponents/PageHeader";
import { StyleSheet, View } from "react-native";

const mockData = {
  level: "1",
  title: "설악산 글라이더",
  left: 100,
  nickname: "날으는 강아지",
};

const innerPages = [
  { name: "프로필 정보 수정하기", link: "/user/profile-edit" },
  { name: "비행 기록", link: "/user/flight-records" },
  { name: "개인정보처리방침", link: "/user/privacy" },
];

export default function Index() {
  return (
    <View>
      <PageHeader title="마이페이지" isFirst={true} />
      <View style={styles.container}>
        <Profile level={mockData.title} nickname={mockData.nickname} />
        <Level
          level={mockData.level}
          title={mockData.title}
          left={mockData.left}
        />
        <MenuList menuItem={innerPages} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 19,
  },
});
