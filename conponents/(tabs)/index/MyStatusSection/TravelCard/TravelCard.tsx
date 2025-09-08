import CustomButton from "@/conponents/CustomButton";
import Colors from "@/constants/colors";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import UserGroup from "./icons/UserGroup";
import { useEffect, useState } from "react";
import { ApiResponse } from "@/types/api";
import { fetchTourSchedule } from "@/libs/fetchTourSchedule";
import { TourismSchedule, TourismScheduleData } from "@/types";
import CardContents from "./CardContents";
import mockSchedule from "@/dummy/mock_schdule";

const TravelCard = () => {
  const router = useRouter();

  const [schedule, setSchedule] = useState<TourismSchedule[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getSchedule = async () => {
    try {
      const response: ApiResponse<TourismScheduleData> =
        await fetchTourSchedule();
      setSchedule(response.data.tourismSchedules);
    } catch (err: any) {
      setError(err.message || "에러 발생");
    } finally {
      setLoading(false);
    }
  };

  const onPress = () => {
    const route = schedule?.length ? "/my-schedules" : "/schedule";
    router.push(route);
  };

  useEffect(() => {
    getSchedule();
    // setSchedule(mockSchedule);
  }, []);

  return (
    <View style={styles.travelCard}>
      <CardContents loading={loading} schedule={schedule} />
      <View style={styles.cardBottom}>
        {schedule?.length ? (
          <View style={styles.userGroupView}>
            <UserGroup />
            <Text style={styles.userGroupText}>2인</Text>
          </View>
        ) : null}
        <CustomButton
          onPress={onPress}
          containerStyle={styles.scheduleDetailBtn}
          buttonType={"small"}
          text={schedule?.length ? "일정보기" : "일정생성"}
          rightArrow
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  travelCard: {
    height: "auto",
    flexShrink: 0,
    marginTop: 200,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    zIndex: 4,
  },
  cardTop: {
    paddingTop: 31,
    paddingBottom: 16,
    marginHorizontal: 18,
    flexDirection: "row",
    alignItems: "baseline",
    borderBottomColor: "rgba(208, 208, 208, 0.50)",
    borderBottomWidth: 2,
  },
  title: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 24,
    marginLeft: 1,
  },
  period: {
    color: Colors.text.text50,
    fontFamily: "Pretendard-SemiBold",
    fontSize: 16,
    marginLeft: 12,
  },
  cardContents: {
    paddingTop: 16,
    paddingHorizontal: 18,
  },
  schedule: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 100,
    backgroundColor: "#9CC3F9",
  },
  scheduleDay: {
    marginRight: 4,
    color: Colors.text.text70,
    fontFamily: "Pretendard-SemiBold",
    fontSize: 12,
  },
  scheduleLocation: {
    fontFamily: "Pretendard-Regular",
    fontSize: 12,
  },
  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 2,
    marginHorizontal: 12,
    marginBottom: 12,
  },
  userGroupView: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    padding: 4,
  },
  userGroupText: {
    color: "#787878",
    fontFamily: "Pretendard-Regular",
    fontSize: 12,
  },
  scheduleDetailBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default TravelCard;
