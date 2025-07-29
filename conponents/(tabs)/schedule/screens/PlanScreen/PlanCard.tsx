import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PlanCard({ index, item, isLast = false }: { index: number, item:plan, isLast?: boolean }) {
  const typeToLabel: Record<string, string> = {
    activity: '체험장 이동',
    restaurant: '음식점으로 이동',
    lodging: '숙소로 이동',
  };
  const [componentHeight, setComponentHeight] = useState<number>(0);
  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setComponentHeight(height);
  };
  return (<TouchableOpacity onLongPress={() => {}} style={styles.container}>
    <View style={styles.rowContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.indexCircle}>
          <Text style={styles.index}>
            {index + 1}
          </Text>
        </View>
        {!isLast &&
          <View style={[styles.line, { height: 19 + componentHeight }]} />}
      </View>
      <View style={styles.rightContainer} onLayout={handleLayout}>
        <Text style={styles.type}>
          {typeToLabel[item.type]}
        </Text>
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.place} numberOfLines={1}>{item.place}</Text>
            <Text style={styles.address} numberOfLines={1} ellipsizeMode="tail">{item.address}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>)
}
const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: '100%',
  },
  rowContainer: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  leftContainer: {
    alignItems: 'center',
  },
  line: {
    width: 1,
    backgroundColor: '#DDE1E6',
    paddingBottom: 19,
  },
  indexCircle: {
    width: 24,
    height: 24,
    borderWidth: 0.8,
    borderColor: '#93BEF9',
    backgroundColor: '#ECF4FE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  index: {
    color: '#3A88F4',
    fontSize: 12,
    fontFamily: 'Pretendard-SemiBold',
  },
  type: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
  },
  card: {
    padding: 8,
    backgroundColor: '#FFFFFF',
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
  image: {
    width: 60,
    height: 60,
    flexShrink: 0,
    borderRadius: 6,
  },
  rightContainer: {
    gap: 12.5,
    flex: 1,
  },
  cardTextContainer: {
    gap: 4,
    flex: 1,
    maxWidth: '60%',
  },
  place: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    flexShrink: 1,
  },
  address: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 12,
    color: '#747474',
    flexShrink: 1,
  },
});
