import { StyleSheet, Text, View } from "react-native";
import { BackButton } from "./BackButton";

export default function ScheduleTopBar() {
    return (<View style={styles.container}>
        <BackButton />
        <Text style={styles.text}>일정 추가하기</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap:8,
        backgroundColor: '#fff',
    },
    text: {
        //Heading1
        fontWeight: 700,
        fontSize: 24
    }
});