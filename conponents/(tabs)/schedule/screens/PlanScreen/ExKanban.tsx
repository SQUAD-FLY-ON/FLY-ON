import React, { Fragment, useCallback, useRef, useState } from 'react';
import {
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



// 메인 여행 계획 칸반 보드
const TravelPlanKanban = () => {
  const [draggingItem, setDraggingItem] = useState<{
    item: Plan;
    sourceDay: string;
    sourceIndex: number;
  } | null>(null);

  const [dayLayouts, setDayLayouts] = useState<{ [key: string]: any }>({});
  const [cardLayouts, setCardLayouts] = useState<{ [key: string]: any[] }>({});
  const [scrollOffset, setScrollOffset] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const dayRefs = useRef<{ [key: string]: View }>({});

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

  // Day 컬럼의 레이아웃 측정 (ScrollView 기준 절대 좌표)
  const measureDay = useCallback((dayId: string, event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    // ScrollView 내에서의 절대 좌표로 저장
    setDayLayouts(prev => ({
      ...prev,
      [dayId]: {
        // x: x + 16, // padding 고려
        // y: y + 20 + scrollOffset, // padding과 scroll offset 고려
        x,
        y,
        width,
        height,
        originalY: y // 원본 y 좌표도 저장
      }
    }));
  }, [scrollOffset]);

  // 카드의 레이아웃 측정 (Day 컨테이너 기준 상대 좌표)
  const measureCard = useCallback((dayId: string, index: number, event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setCardLayouts(prev => {
      const dayCards = [...(prev[dayId] || [])];
      dayCards[index] = {
        x,
        // y: y + 16, // Day content padding 고려
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

  // 스크롤 오프셋 추적
  const handleScroll = useCallback((event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScrollOffset(offsetY);
  }, []);

  // 드래그 시작
  const handleDragStart = useCallback(async (item: Plan, dayId: string, index: number) => {
    setDraggingItem({ item, sourceDay: dayId, sourceIndex: index });
    await remeasureDayLayouts();
  }, []);

  // 드래그 중
  const handleDragMove = useCallback((x: number, y: number) => {
    // 여기서 자동 스크롤 로직을 추가할 수 있습니다
  }, []);

  // 타겟 Day와 위치 찾기 (화면 절대 좌표 기준)
  // const getDropTarget = useCallback((screenX: number, screenY: number) => {
  //   // 현재 스크롤 오프셋을 고려한 실제 Y 좌표 계산
  //   const adjustedY = screenY + scrollOffset;

  //   console.log('Drop coordinates (screen):', screenX, screenY);
  //   console.log('Scroll offset:', scrollOffset);
  //   console.log('Adjusted Y:', adjustedY);
  //   console.log('Day layouts:', dayLayouts);

  //   const dayIds = Object.keys(dayLayouts).sort(); // day1, day2, day3 순으로 정렬

  //   for (const dayId of dayIds) {
  //     const dayLayout = dayLayouts[dayId];
  //     if (!dayLayout) continue;

  //     // Day의 실제 위치 계산 (ScrollView content 내에서의 절대 좌표)
  //     const dayTop = dayLayout.originalY + 20; // ScrollView contentContainer padding
  //     const dayBottom = dayTop + dayLayout.height;

  //     console.log(`Checking ${dayId}: originalY=${dayLayout.originalY}, dayTop=${dayTop}, dayBottom=${dayBottom}, adjustedY=${adjustedY}`);

  //     // Day 영역 내에 있는지 확인
  //     if (adjustedY >= dayTop && adjustedY <= dayBottom) {
  //       const cards = cardLayouts[dayId] || [];
  //       console.log(`Inside ${dayId}, cards:`, cards.length);

  //       if (cards.length === 0) {
  //         console.log(`Empty day, inserting at index 0`);
  //         return { dayId, insertIndex: 0 };
  //       }

  //       // Day 헤더 높이 고려 (대략 60px)
  //       const dayContentTop = dayTop + 60;
  //       const relativeY = adjustedY - dayContentTop;

  //       console.log(`Day content top: ${dayContentTop}, relative Y: ${relativeY}`);

  //       // 카드들 사이의 위치 찾기
  //       for (let i = 0; i < cards.length; i++) {
  //         const card = cards[i];
  //         if (!card) continue;

  //         const cardCenterY = card.y + card.height / 2;
  //         console.log(`Card ${i} centerY: ${cardCenterY}, relative Y: ${relativeY}`);

  //         if (relativeY < cardCenterY) {
  //           console.log(`Inserting at index ${i}`);
  //           return { dayId, insertIndex: i };
  //         }
  //       }

  //       // 마지막 위치에 삽입
  //       console.log(`Inserting at end, index ${cards.length}`);
  //       return { dayId, insertIndex: cards.length };
  //     }
  //   }

  //   // 가장 가까운 Day 찾기
  //   let closestDay = null;
  //   let minDistance = Infinity;

  //   for (const dayId of dayIds) {
  //     const dayLayout = dayLayouts[dayId];
  //     if (!dayLayout) continue;

  //     const dayTop = dayLayout.originalY + 20;
  //     const dayBottom = dayTop + dayLayout.height;
  //     const dayCenter = (dayTop + dayBottom) / 2;

  //     const distance = Math.abs(adjustedY - dayCenter);
  //     if (distance < minDistance) {
  //       minDistance = distance;
  //       closestDay = dayId;
  //     }
  //   }

  //   if (closestDay) {
  //     const cards = cardLayouts[closestDay] || [];
  //     console.log(`No exact match, using closest day ${closestDay} with ${cards.length} cards`);
  //     return { dayId: closestDay, insertIndex: cards.length };
  //   }

  //   console.log('No target found');
  //   return null;
  // }, [dayLayouts, cardLayouts, scrollOffset]);
  // 타겟 Day와 위치 찾기 (내부용)
  const getDropTargetInternal = useCallback((x: number, y: number) => {
    const dayIds = Object.keys(dayLayouts);

    for (const dayId of dayIds) {
      const dayLayout = dayLayouts[dayId];
      if (!dayLayout) continue;

      const dayTop = dayLayout.y;
      const dayBottom = dayLayout.y + dayLayout.height;

      if (y >= dayTop - 50 && y <= dayBottom + 50) {
        const cards = cardLayouts[dayId] || [];

        if (cards.length === 0) {
          return { dayId, insertIndex: 0 };
        }

        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          if (!card) continue;

          const cardScreenY = dayLayout.y + card.y + card.height / 2;

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

  // 드래그 종료
  const handleDragEnd = useCallback((x: number, y: number) => {
    if (!draggingItem) return;

    console.log('Drag end at (screen coordinates):', x, y);
    const dropTarget = getDropTarget(x, y);
    console.log('Drop target:', dropTarget);

    if (dropTarget) {
      const { dayId: targetDay, insertIndex } = dropTarget;
      const { item, sourceDay, sourceIndex } = draggingItem;

      console.log(`Moving from ${sourceDay}[${sourceIndex}] to ${targetDay}[${insertIndex}]`);

      if (targetDay === sourceDay) {
        // 같은 Day 내에서 순서 변경
        if (insertIndex !== sourceIndex && insertIndex !== sourceIndex + 1) {
          // const newDayData = { ...dayData };
          // const plans = [...newDayData[sourceDay].plans];

          // console.log('Before move:', plans.map(p => p.place));

          // // 아이템 제거
          // const [movedItem] = plans.splice(sourceIndex, 1);

          // // 새 위치에 삽입 (인덱스 조정)
          // const finalInsertIndex = insertIndex > sourceIndex ? insertIndex - 1 : insertIndex;
          // plans.splice(finalInsertIndex, 0, movedItem);

          // console.log('After move:', plans.map(p => p.place));

          // newDayData[sourceDay].plans = plans;
          // setDayData(newDayData);
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

    setDraggingItem(null);
  }, [draggingItem, dayData, getDropTarget]);

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
                key={plan.key}
                onLayout={(event) => measureCard(dayId, planIndex, event)}
              >
                <DraggablePlanCard
                  item={plan}
                  index={planIndex}
                  dayId={dayId}
                  isLast={planIndex === day.plans.length - 1}
                  onDragStart={handleDragStart}
                  onDragMove={handleDragMove}
                  onDragEnd={handleDragEnd}
                  isDragging={draggingItem?.item.key === plan.key}
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
    <View style={styles.container}>
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
});

export default TravelPlanKanban;