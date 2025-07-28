

import Entypo from '@expo/vector-icons/Entypo';
import React, { Fragment, useCallback, useContext, useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DraggablePlanCard from './DraggablePlanCard';

// 타입 정의
interface Plan {
  key: string;
  type: string;
  place: string;
  address: string;
  image: any;
  day: string;
}

interface DayData {
  [dayId: string]: {
    title: string;
    plans: Plan[];
    color: string;
  };
}
// 전역 floating layer를 위한 portal 컨텍스트
export const FloatingPortalContext = React.createContext(null);

// 메인 앱에서 사용할 FloatingPortal Provider
export const FloatingPortalProvider = ({ children }) => {
  const [floatingElement, setFloatingElement] = useState(null);

  return (
    <FloatingPortalContext.Provider value={{ setFloatingElement }}>
      <View style={{ flex: 1 }}>
        {children}
        {/* Floating layer - 최상위에 렌더링 */}
        {floatingElement && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none', // 터치 이벤트 통과
              zIndex: 9999,
              elevation: 9999,
            }}
          >
            {floatingElement}
          </View>
        )}
      </View>
    </FloatingPortalContext.Provider>
  );
};

// 메인 여행 계획 칸반 보드
const TravelPlanKanban = () => {
  const [draggingItem, setDraggingItem] = useState<{
    item: Plan;
    sourceDay: string;
    sourceIndex: number;
  } | null>(null);

  const [dayLayouts, setDayLayouts] = useState<{ [key: string]: any }>({});
  const [cardLayouts, setCardLayouts] = useState<{ [key: string]: any[] }>({});
  const scrollOffsetRef = useRef(0); // 상태에서 useRef로 변경
  const [scrollViewLayout, setScrollViewLayout] = useState({ y: 0, height: 0 });
  const scrollViewLayoutRef = useRef({ y: 0, height: 0 });
  const isAutoScrollingRef = useRef(false);
  const autoScrollDirectionRef = useRef<'up' | 'down' | null>(null)
  const autoScrollOffsetYRef = useRef(0);
  const dayRefs = useRef<{ [key: string]: View }>({});
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  // 드래그 시작 시의 스크롤 오프셋을 저장
  const initialScrollOffsetRef = useRef(0);

  const [dayData, setDayData] = useState<DayData>({
    day1: {
      title: 'Day 1',
      color: '#3B82F6',
      plans: [
        {
          key: "day1-0",
          type: "activity",
          place: "양평 패러러브 패러글라이딩",
          address: "경기 양평군 옥천면 동막길 49 1층",
          image: null,
          day: "day1"
        },
        {
          key: "day1-1",
          type: "restaurant",
          place: "카페 소풍",
          address: "경기 양평군 양서면 곱은재길 21",
          image: null,
          day: "day1"
        },
        {
          key: "day1-2",
          type: "lodging",
          place: "힐링하우스 펜션",
          address: "경기 양평군 강하면 강남로 33",
          image: null,
          day: "day1"
        }
      ]
    },
    day2: {
      title: 'Day 2',
      color: '#F59E0B',
      plans: [
        {
          key: "day2-0",
          type: "sightseeing",
          place: "산음 자연 휴양림",
          address: "경기 양평군 단월면 고북리 347",
          image: null,
          day: "day2"
        },
        {
          key: "day2-1",
          type: "restaurant",
          place: "아델라한옥",
          address: "경기 양평군 개군면 공서울길 49-1",
          image: null,
          day: "day2"
        },
        {
          key: "day2-2",
          type: "restaurant",
          place: "카페 소풍",
          address: "경기 양평군 양서면 곱은재길 21",
          image: null,
          day: "day2"
        },
        {
          key: "day2-3",
          type: "lodging",
          place: "레스트힐 리조트",
          address: "경기 양평군 용문면 용문산로 250",
          image: null,
          day: "day2"
        }
      ]
    },
    day3: {
      title: 'Day 3',
      color: '#10B981',
      plans: [
        {
          key: "day3-0",
          type: "sightseeing",
          place: "두물머리",
          address: "경기 양평군 양서면 양수로 93",
          image: null,
          day: "day3"
        },
        {
          key: "day3-1",
          type: "restaurant",
          place: "파스타정원",
          address: "경기 양평군 서종면 북한강로 941",
          image: null,
          day: "day3"
        },
        {
          key: "day3-2",
          type: "lodging",
          place: "숲속의 하루 글램핑",
          address: "경기 양평군 청운면 가현리 산 74-2",
          image: null,
          day: "day3"
        }
      ]
    }
  });

  // ScrollView 레이아웃 측정 - measureInWindow로 화면 기준 절대 좌표 획득
  const scrollViewRef = useRef<ScrollView>(null);
  const containerRef = useRef<View>(null);


    // 🎯 Floating 관련 새로운 state들
  const [floatingCardData, setFloatingCardData] = useState<{
    item: Plan;
    dayId: string;
    index: number;
    layout: { x: number; y: number; width: number; height: number };
    gestureState: any;
  } | null>(null);
  
  const floatingPan = useRef(new Animated.ValueXY()).current;
  const floatingOpacity = useRef(new Animated.Value(0)).current;
  const floatingPortal = useContext(FloatingPortalContext);

  // measureScrollViewPosition 함수 수정 - 정확한 위치 측정
  const measureScrollViewPosition = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.measureInWindow((x, y, width, height) => {
        console.log('ScrollView position:', { x, y, width, height });
        const layout = { y, height, x, width };
        setScrollViewLayout(layout);
        scrollViewLayoutRef.current = layout; // ref에도 저장
      });
    }
  }, []);

  // Day 컬럼의 레이아웃 측정 (ScrollView 기준 절대 좌표)
  const measureDay = useCallback((dayId: string, event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setDayLayouts(prev => ({
      ...prev,
      [dayId]: {
        x,
        y,
        width,
        height,
        originalY: y
      }
    }));
  }, []);

  // 카드의 레이아웃 측정 (Day 컨테이너 기준 상대 좌표)
  const measureCard = useCallback((dayId: string, index: number, event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setCardLayouts(prev => {
      const dayCards = [...(prev[dayId] || [])];
      dayCards[index] = {
        x,
        y,
        width,
        height,
        index
      };
      return {
        ...prev,
        [dayId]: dayCards
      };
    });
  }, []);

  const remeasureDayLayouts = useCallback(() => {
    return new Promise<void>((resolve) => {
      const dayIds = Object.keys(dayData);
      let measured = 0;

      dayIds.forEach(dayId => {
        const dayRef = dayRefs.current[dayId];
        if (dayRef) {
          dayRef.measureInWindow((x, y, width, height) => {
            setDayLayouts(prev => ({
              ...prev,
              [dayId]: { x, y, width, height }
            }));

            measured++;
            if (measured === dayIds.length) {
              resolve();
            }
          });
        } else {
          measured++;
          if (measured === dayIds.length) {
            resolve();
          }
        }
      });
    });
  }, [dayData]);

  // startAutoScroll 함수도 수정 - 이미 스크롤 중인 경우 처리
  const startAutoScroll = useCallback((direction: 'up' | 'down') => {
    // 이미 같은 방향으로 스크롤 중이면 무시
    if (isAutoScrollingRef.current && autoScrollDirectionRef.current === direction) {
      return;
    }

    // 기존 스크롤 중지
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }

    isAutoScrollingRef.current = true;
    autoScrollDirectionRef.current = direction;

    const scrollSpeed = 15;
    const scrollInterval = 16;

    autoScrollInterval.current = setInterval(() => {
      if (scrollViewRef.current) {
        const currentOffset = scrollOffsetRef.current;
        const newOffset = direction === 'up'
          ? Math.max(0, currentOffset - scrollSpeed)
          : currentOffset + scrollSpeed;

        // 스크롤 한계 체크
        if (direction === 'up' && newOffset <= 0) {
          // 맨 위에 도달하면 자동스크롤 중지
          stopAutoScroll();
          return;
        }

        scrollViewRef.current.scrollTo({
          y: newOffset,
          animated: false
        });

        scrollOffsetRef.current = newOffset;
        autoScrollOffsetYRef.current += direction === 'up' ? -scrollSpeed : scrollSpeed;
      }
    }, scrollInterval);
  }, []);
  console.log('scroll', scrollOffsetRef.current);
  // 자동 스크롤 중지
  const stopAutoScroll = useCallback(() => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
    isAutoScrollingRef.current = false;
    autoScrollDirectionRef.current = null;
  }, []);

  // 스크롤 오프셋 추적
  const handleScroll = useCallback((event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    scrollOffsetRef.current = offsetY; // ref로 직접 업데이트
  }, []);

  // handleDragStart 수정 - 측정 타이밍 개선
// 🎯 드래그 시작 - Floating 카드 생성
  const handleDragStart = useCallback(async (
    item: Plan, 
    dayId: string, 
    index: number, 
    cardLayout: { x: number; y: number; width: number; height: number }
  ) => {
    setDraggingItem({ item, sourceDay: dayId, sourceIndex: index });
    initialScrollOffsetRef.current = scrollOffsetRef.current;

    // ScrollView 위치 측정
    measureScrollViewPosition();
    await remeasureDayLayouts();

    // 🎯 Floating 카드 데이터 설정
    setFloatingCardData({
      item,
      dayId,
      index,
      layout: cardLayout,
      gestureState: { dx: 0, dy: 0 }
    });

    // Floating 카드 생성
    createFloatingCard(item, dayId, index, cardLayout, { dx: 0, dy: 0 });
    
    // Floating 카드 페이드인
    Animated.timing(floatingOpacity, {
      toValue: 0.9,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, []);

   const createFloatingCard = useCallback((
    item: Plan,
    dayId: string,
    index: number,
    layout: { x: number; y: number; width: number; height: number },
    gestureState: any
  ) => {
    const typeToLabel: Record<string, string> = {
      activity: '체험장 이동',
      restaurant: '음식점으로 이동',
      lodging: '숙소로 이동',
      sightseeing: '관광지로 이동'
    };
    const floatingCard = (
      <Animated.View
        style={{
          position: 'absolute',
          left: layout.x,
          top: layout.y,
          width: layout.width,
          height: layout.height,
          opacity: floatingOpacity,
          transform: [
            { translateX: floatingPan.x },
            { translateY: floatingPan.y }
          ],
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 0.3,
          shadowRadius: 16,
          elevation: 16,
          pointerEvents: 'auto',
        }}
      >
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.indexCircle}>
              <Text style={styles.index}>{index + 1}</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
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
              <View>
                <Entypo name="menu" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    );
    
    if (floatingPortal) {
      floatingPortal.setFloatingElement(floatingCard);
    }
  }, [floatingOpacity, floatingPan, floatingPortal]);


// 부모 컴포넌트의 handleDragMove 수정
const handleDragMove = useCallback((x: number, y: number, gestureState: any, evt: any) => {
  if (!scrollViewLayout.height) return;
  
  // gestureState가 undefined인 경우 방어 처리
  if (!gestureState) {
    console.warn('gestureState is undefined in handleDragMove');
    return;
  }

  // 자동스크롤 로직 (기존과 동일)
  const SCROLL_THRESHOLD = 40;
  const scrollViewTop = scrollViewLayout.y;
  const scrollViewBottom = scrollViewLayout.y + scrollViewLayout.height;

  const isInTopScrollZone = y <= scrollViewTop + SCROLL_THRESHOLD;
  const isInBottomScrollZone = y >= scrollViewBottom - SCROLL_THRESHOLD;

  if (isInTopScrollZone && scrollOffsetRef.current > 0) {
    if (!isAutoScrollingRef.current || autoScrollDirectionRef.current !== 'up') {
      startAutoScroll('up');
    }
  } else if (isInBottomScrollZone) {
    if (!isAutoScrollingRef.current || autoScrollDirectionRef.current !== 'down') {
      startAutoScroll('down');
    }
  } else {
    if (isAutoScrollingRef.current) {
      stopAutoScroll();
    }
  }

  // Floating 카드 위치 업데이트
  if (floatingCardData && gestureState.dx !== undefined && gestureState.dy !== undefined) {
    // gestureState의 변화를 floatingPan에 즉시 반영
    floatingPan.setValue({ x: gestureState.dx, y: gestureState.dy });
    
    // 필요시 floating 카드 재생성 (자동스크롤 상태 변화 등)
    // if (gestureState.isAutoScrolling !== floatingCardData.gestureState?.isAutoScrolling) {
    //   console.log('새로생성',gestureState.dy);
    //   setFloatingCardData(prev => prev ? {
    //     ...prev,
    //     gestureState
    //   } : null);
      
    //   createFloatingCard(
    //     floatingCardData.item,
    //     floatingCardData.dayId,
    //     floatingCardData.index,
    //     floatingCardData.layout,
    //     gestureState
    //   );
    // }
  }
}, [scrollViewLayout, floatingCardData, createFloatingCard, startAutoScroll, stopAutoScroll]);

  const getDropTargetInternal = useCallback((x: number, y: number) => {
    const dayIds = Object.keys(dayLayouts);

    for (const dayId of dayIds) {
      const dayLayout = dayLayouts[dayId];
      if (!dayLayout) continue;

      // 스크롤 변화량을 고려한 dayLayout 위치 보정
      const scrollDelta = scrollOffsetRef.current - initialScrollOffsetRef.current;
      const adjustedDayTop = dayLayout.y + scrollDelta;
      const adjustedDayBottom = adjustedDayTop + dayLayout.height;

      if (y >= adjustedDayTop - 50 && y <= adjustedDayBottom + 50) {
        const cards = cardLayouts[dayId] || [];

        if (cards.length === 0) {
          return { dayId, insertIndex: 0 };
        }

        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          if (!card) continue;

          const cardScreenY = adjustedDayTop + card.y + card.height / 2;

          if (y < cardScreenY) {
            return { dayId, insertIndex: i };
          }
        }

        return { dayId, insertIndex: cards.length };
      }
    }

    return null;
  }, [dayLayouts, cardLayouts]);

  // 타겟 Day와 위치 찾기 (실시간 스크롤 오프셋 적용)
  const getDropTarget = useCallback((x: number, y: number) => {
    return getDropTargetInternal(x, y);
  }, [getDropTargetInternal]);

 const handleDragEnd = useCallback((x: number, y: number) => {
    stopAutoScroll();

    if (!draggingItem) return;
    // 드롭 로직 (기존과 동일)
    const dropTarget = getDropTarget(x, y);
    console.log('Drop target:', dropTarget);

    if (dropTarget) {
      const { dayId: targetDay, insertIndex } = dropTarget;
      const { item, sourceDay, sourceIndex } = draggingItem;

      console.log(`Moving from ${sourceDay}[${sourceIndex}] to ${targetDay}[${insertIndex}]`);

      if (targetDay === sourceDay) {
        // 같은 Day 내에서 순서 변경
        if (insertIndex !== sourceIndex && insertIndex !== sourceIndex + 1) {
          setDayData(prevData => {
            const newDayData = { ...prevData };
            const plans = [...newDayData[sourceDay].plans];

            // 아이템 제거
            const [movedItem] = plans.splice(sourceIndex, 1);

            // 새 위치에 삽입 (인덱스 조정)
            const finalInsertIndex = insertIndex > sourceIndex ? insertIndex - 1 : insertIndex;
            plans.splice(finalInsertIndex, 0, movedItem);

            newDayData[sourceDay].plans = plans;
            return newDayData;
          });
        }
      } else {
        // 다른 Day로 이동
        const newDayData = { ...dayData };

        console.log('Before cross-day move:');
        console.log(`Source ${sourceDay}:`, newDayData[sourceDay].plans.map(p => p.place));
        console.log(`Target ${targetDay}:`, newDayData[targetDay].plans.map(p => p.place));

        // 소스에서 제거
        const [movedItem] = newDayData[sourceDay].plans.splice(sourceIndex, 1);

        // 타겟에 삽입 (새로운 key 생성)
        const newItem = {
          ...movedItem,
          day: targetDay,
          key: `${targetDay}-${Date.now()}`
        };
        newDayData[targetDay].plans.splice(insertIndex, 0, newItem);

        console.log('After cross-day move:');
        console.log(`Source ${sourceDay}:`, newDayData[sourceDay].plans.map(p => p.place));
        console.log(`Target ${targetDay}:`, newDayData[targetDay].plans.map(p => p.place));

        setDayData(newDayData);
      }
    }
   // 🎯 Floating 카드 제거
    if (floatingPortal) {
      Animated.timing(floatingOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        floatingPortal.setFloatingElement(null);
        setFloatingCardData(null);
      });
    }

    // Pan 리셋
    floatingPan.setValue({ x: 0, y: 0 });
    setDraggingItem(null);
  }, [draggingItem, getDropTarget, stopAutoScroll, floatingPortal]);

  // Day 컬럼 렌더링
  const renderDayColumn = (dayId: string, index: number) => {
    const day = dayData[dayId];
    if (!day) return null;

    return (
      <View
        key={dayId}
        style={[styles.dayColumn, index > 0 && styles.dayColumnSpacing]}
        onLayout={(event) => measureDay(dayId, event)}
        ref={(ref) => {
          if (ref) {
            dayRefs.current[dayId] = ref;
          }
        }}
      >
        {/* Day 헤더 */}
        <View style={styles.dayHeader}>
          <Text style={styles.dayTitle}>{day.title}</Text>
        </View>

        {/* 계획 리스트 */}
        <View style={styles.dayContent}>
          {day.plans.map((plan, planIndex) => (
            <Fragment key={plan.key}>
              <View
                onLayout={(event) => measureCard(dayId, planIndex, event)}
              >
                <DraggablePlanCard
                  key={plan.key}
                  item={plan}
                  index={planIndex}
                  dayId={dayId}
                  isLast={planIndex === day.plans.length - 1}
                  onDragStart={handleDragStart}
                  onDragMove={handleDragMove}
                  onDragEnd={handleDragEnd}
                  isDragging={draggingItem?.item.key === plan.key}
                  isAutoScrollingRef={isAutoScrollingRef}
                  autoScrollDirectionRef={autoScrollDirectionRef}
                  scrollViewLayoutRef={scrollViewLayoutRef} // 추가
                  autoScrollOffsetYRef={autoScrollOffsetYRef}
                />
              </View>
            </Fragment>
          ))}
        </View>
      </View>
    );
  };
  // 메인 컴포넌트 return
  return (
      <View style={styles.container} ref={containerRef}>
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {Object.keys(dayData).sort().map((dayId, index) => renderDayColumn(dayId, index))}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    position: 'relative',
  },
  dayColumn: {
    width: '100%',
  },
  dayColumnSpacing: {
    marginTop: 20,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dayTitle: {
    fontSize: 18,
    fontFamily: 'Pretendard-SemiBold',
    color: '#1A202C',
  },
  countBadge: {
    backgroundColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  countText: {
    fontSize: 12,
    fontFamily: 'Pretendard-Medium',
    color: '#4A5568',
  },
  dayContent: {
    paddingLeft: 12,
    marginBottom: 32,
  },
  cardContainer: {
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
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
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#E2E8F0',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  imageText: {
    fontSize: 12,
    color: '#64748B',
    fontFamily: 'Pretendard-Medium',
  },
  cardTextContainer: {
    flex: 1,
    gap: 4,
    maxWidth: '60%',
  },
  place: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    color: '#1A202C',
    flexShrink: 1,
  },
  address: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 12,
    color: '#747474',
    flexShrink: 1,
  },
  portal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
});

export default TravelPlanKanban;