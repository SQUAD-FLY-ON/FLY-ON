import Heading1 from "@/conponents/CustomText/Heading1"
import Paragraph6 from "@/conponents/CustomText/Paragraph6"
import { StyleSheet, Text, View } from "react-native"
import HomeImage from "./AnimatedImages/HomeImage"
import TravelCard from "./TravelCard/TravelCard"

export default function MyStatusSection() {
    return (
        <View style={styles.myStatus}>
            {/* 비행고도 기록 */}
            <View>
                <Heading1 style={styles.logo}>LOGO</Heading1>
                <View style={styles.gliderView}>
                    <Paragraph6 style={styles.gliderText}>설악산 글라이더</Paragraph6>
                </View>

                <Text style={styles.userName}>
                    <Text style={styles.userNameText}>김유이</Text>
                    <Text style={styles.userNameSuffixText}>님</Text>
                </Text>
            </View>
            {/* 이미지 요소 */}
            <HomeImage />
            {/* 나의 일정 카드리스트 */}
            <TravelCard />
        </View>
    )
}

const styles = StyleSheet.create({
    myStatus: {
        padding: 16,
    },
    logo: {
        fontWeight: 900,
        marginTop: 12,
    },
    gliderView: {
        backgroundColor: "#3A88F4",
        borderRadius: 100,
        paddingVertical: 4,
        paddingHorizontal: 12,
        alignSelf: "flex-start",
        marginTop: 14,
    },
    gliderText: {
        color: "#fff",
        fontWeight: 700,
    },
    userName: {
        marginTop: 12,
        marginLeft: 11,
    },
    userNameText: {
        color: "#333",
        fontSize: 24,
        fontWeight: 700,
        marginRight: 4,
    },
    userNameSuffixText: {
        color: "#333",
        fontSize: 20,
        fontWeight: 400,
    },
})