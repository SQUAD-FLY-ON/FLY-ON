import { activities } from '@/dummy/activity_area';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ActivityAreaCard from '../ActivityAreaCard';
import Carousel from '../Carousel';


export default function NearActivity() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>가까운 체험장 추천</Text>
                    <Image source={require('@/assets/images/arrow_down.png')} />
                </View>
                <Text style={styles.link}>체험장 탐색하기</Text>
            </View>
            <Carousel
                data={activities}
                renderItem={(item) => <ActivityAreaCard item={item} />}
                style={{ paddingLeft: 16, marginBottom:32, }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 24,
        marginTop:48,
    },
    titleContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 4,
    },
    title: {
        fontFamily: 'Pretendard-Bold',
        fontWeight: 700,
        fontSize: 22,
        lineHeight: 26,
    },
    link: {
        fontFamily: 'Pretendard-Regular',
        fontSize: 12,
        textDecorationLine: 'underline',
        color: '#8E9297',
    },
});
