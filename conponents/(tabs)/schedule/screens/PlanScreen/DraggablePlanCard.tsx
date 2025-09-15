import { typeToLabel } from "@/constants/screens";
import { Plan } from "@/types";
import Entypo from "@expo/vector-icons/Entypo";
import { useRef, useState } from "react";
import { Animated, Image, PanResponder, PanResponderGestureState, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DraggablePlanCard = ({
  item,
  index,
  dayId,
  isLast,
  onDragStart,
  onDragMove,
  onDragEnd,
  isDragging,
  isAutoScrollingRef,
  autoScrollDirectionRef,
  scrollViewLayoutRef,
  autoScrollOffsetYRef,
}: {
  item: Plan;
  index: number;
  dayId: string;
  isLast: boolean;
  onDragStart: (item: Plan, dayId: string, index: number, cardLayout: { x: number; y: number; width: number; height: number }) => void;
  onDragMove: (x: number, y: number, gestureState: PanResponderGestureState, evt: any) => void;
  onDragEnd: (x: number, y: number) => void;
  isDragging: boolean;
  isAutoScrollingRef: React.MutableRefObject<boolean>;
  autoScrollDirectionRef: React.MutableRefObject<'up' | 'down' | null>;
  scrollViewLayoutRef: React.MutableRefObject<{ y: number; height: number }>;
  autoScrollOffsetYRef: React.RefObject<number>;
}) => {
  console.log(item.type);
  const pan = useRef(new Animated.ValueXY()).current;
  const cardOpacity = useRef(new Animated.Value(1)).current;
  const floatingCardOpacity = useRef(new Animated.Value(0)).current;
  const [componentHeight, setComponentHeight] = useState(0);
  const [isPanEnabled, setIsPanEnabled] = useState(false);
  const cardRef = useRef<View>(null);  
  // 기존 자동스크롤 관련 refs
  const isDraggingRef = useRef(false);
  const localAutoScrollingRef = useRef(false);
  const cardInitialPosition = useRef({ x: 0, y: 0 });
  

  
const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => isPanEnabled,
    onMoveShouldSetPanResponder: () => isPanEnabled,

    onPanResponderGrant: (evt, gestureState) => {
      isDraggingRef.current = true;

      // 카드 초기 위치 저장 (화면 절대 좌표)
      cardInitialPosition.current = {
        x: evt.nativeEvent.pageX,
        y: evt.nativeEvent.pageY
      };
      // 카드 위치 측정 - 콜백으로 처리
      if (cardRef.current) {
        cardRef.current.measureInWindow((x, y, width, height) => {
          const cardLayout = { x, y, width, height };
          onDragStart(item, dayId, index, cardLayout);
        });
      } else {
      
        // measureInWindow가 실패한 경우 기본값으로 처리
        const defaultLayout = { x: 0, y: 0, width: 200, height: 100 };
        onDragStart(item, dayId, index, defaultLayout);
      }

      // 원본 카드 흐리게 처리
      Animated.timing(cardOpacity, {
        toValue: 0.3,
        duration: 150,
        useNativeDriver: false,
      }).start();

      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },

    onPanResponderMove: (evt, gestureState) => {
      if (!isDraggingRef.current) return;
      
      onDragMove(evt.nativeEvent.pageX, evt.nativeEvent.pageY,gestureState, evt);
    },

    onPanResponderRelease: (evt, gestureState) => {
      isDraggingRef.current = false;
      localAutoScrollingRef.current = false;

      // 화면 절대 좌표로 드래그 종료 위치 전달
      onDragEnd(evt.nativeEvent.pageX, evt.nativeEvent.pageY);

      // 원본 카드 복원
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
  const handleLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setComponentHeight(height);
  };

   return (
    <Animated.View
      ref={cardRef}
      style={[
        {
          opacity: cardOpacity, // 드래그 중에는 흐리게
          zIndex: isDragging ? 0 : 1,
          elevation: isDragging ? 0 : 2,
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
            {item?.image? (
              <Image style = {styles.imagePlaceholder} source={{ uri: item?.image }} />
            ): (
              <View style={styles.imagePlaceholder}>
              <Text style={styles.imageText}>IMG</Text>
            </View>
            )}
            
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