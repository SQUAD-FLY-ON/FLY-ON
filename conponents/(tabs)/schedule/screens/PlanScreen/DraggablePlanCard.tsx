import { Plan } from "@/types";
import Entypo from "@expo/vector-icons/Entypo";
import { useRef, useState } from "react";
import { Animated, PanResponder, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// 드래그 가능한 계획 카드 컴포넌트
const DraggablePlanCard = ({
  item,
  index,
  dayId,
  isLast,
  onDragStart,
  onDragMove,
  onDragEnd,
  isDragging
}: {
  item: Plan;
  index: number;
  dayId: string;
  isLast: boolean;
  onDragStart: (item: Plan, dayId: string, index: number) => void;
  onDragMove: (x: number, y: number) => void;
  onDragEnd: (x: number, y: number) => void;
  isDragging: boolean;
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const cardOpacity = useRef(new Animated.Value(1)).current;
  const [componentHeight, setComponentHeight] = useState(0);
  const [isPanEnabled, setIsPanEnabled] = useState(false);

  const typeToLabel: Record<string, string> = {
    activity: '체험장 이동',
    restaurant: '음식점으로 이동',
    lodging: '숙소로 이동',
    sightseeing: '관광지로 이동'
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => isPanEnabled,
    onMoveShouldSetPanResponder: () => isPanEnabled,

    onPanResponderGrant: () => {
      onDragStart(item, dayId, index);

      // 시각적 피드백
      Animated.timing(cardOpacity, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: false,
      }).start();

      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },

    onPanResponderMove: (evt, gestureState) => {
      onDragMove(gestureState.moveX, gestureState.moveY);

      Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      })(evt, gestureState);
    },

    onPanResponderRelease: (evt, gestureState) => {
      onDragEnd(gestureState.moveX, gestureState.moveY);

      // 원래 위치로 복귀
      pan.flattenOffset();
      Animated.parallel([
        Animated.timing(pan, {
          toValue: { x: 0, y: 0 },
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(cardOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    },
  });

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setComponentHeight(height);
  };

  return (
    <Animated.View
      style={[
        {
          opacity: cardOpacity,
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
          zIndex: isDragging ? 999 : 1,
          elevation: isDragging ? 5 : 2,
        }
      ]}
    >
      <View style={styles.rowContainer} {...panResponder.panHandlers}>
        <View style={styles.leftContainer}>
          <View style={styles.indexCircle}>
            <Text style={styles.index}>{index + 1}</Text>
          </View>
          {!isLast && (
            <View style={[styles.line, { height: 19 + componentHeight }]} />
          )}
        </View>
        <View style={styles.rightContainer} onLayout={handleLayout}>
          <Text style={styles.type}>{typeToLabel[item?.type]}</Text>
          <View style={styles.card}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageText}>IMG</Text>
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.place} numberOfLines={1}>
                {item?.place}
              </Text>
              <Text style={styles.address} numberOfLines={2} ellipsizeMode="tail">
                {item?.address}
              </Text>
            </View>
            <TouchableOpacity
              onLongPress={() => setIsPanEnabled(true)}
              onPressOut={() => setIsPanEnabled(false)}
              delayLongPress={100}>
              <Entypo style={styles.menu} name="menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </Animated.View>
  );
};

export default DraggablePlanCard;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
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
  rightContainer: {
    flex: 1,
    gap: 12.5,
  },
  type: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    color: '#1A202C',
  },
  card: {
    padding: 8,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#E2E8F0',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    fontSize: 12,
    color: '#64748B',
    fontFamily: 'Pretendard-Medium',
  },
  cardTextContainer: {
    flex: 1,
    gap: 4,
  },
  place: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    color: '#1A202C',
  },
  address: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 12,
    color: '#747474',
  },
  menu: {
  }
});