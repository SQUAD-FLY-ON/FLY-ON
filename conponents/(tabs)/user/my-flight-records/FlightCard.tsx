import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FlightCard = ({
  id,
  name,
  date,
  data,
}: {
  id: string;
  name: string;
  date: string;
  data: any;
}) => {
  const router = useRouter();

  const onPress = () => {
    console.log(data);
    // 체험장 상세 페이지로 이동
    router.push({
      pathname: `/user/flight-detail/[id]`,
      params: { id, data: JSON.stringify(data) },
    });
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={[styles.text, { fontSize: 20 }]}>{name}</Text>
      <Text style={[styles.text, { fontSize: 16, marginBottom: 14 }]}>
        {date.slice(0, 10)}
      </Text>
    </Pressable>
  );
};

export default FlightCard;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 277,
    borderRadius: 20,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: "blue",
  },
  text: {
    fontFamily: "Pretendard-Regular",
    color: "#FFF",
    marginLeft: 14,
  },
});
