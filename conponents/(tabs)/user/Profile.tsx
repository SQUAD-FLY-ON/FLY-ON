import LevelBadge from "@/conponents/LevelBadge";
import { StyleSheet, Text, View } from "react-native";

const Profile = ({ level, nickname }: { level: string; nickname: string }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profilePicture}></View>
      <LevelBadge text={`${level} 글라이더`} />
      <Text style={styles.profileName}>{nickname}님</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    paddingTop: "10%",
    marginBottom: 15,
    alignItems: "center",
  },
  profilePicture: {
    width: 100,
    height: 100,
    backgroundColor: "#D3E5FF",
    borderRadius: 30,
    marginBottom: 24,
  },
  profileName: {
    fontFamily: "Pretendard-Bold",
    fontSize: 24,
    marginTop: 8,
  },
});
