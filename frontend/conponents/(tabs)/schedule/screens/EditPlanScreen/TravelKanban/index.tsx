import { typeToLabel } from '@/constants/screens';
import { useAutoScroll } from '@/hooks/dragAndDrop/useAutoScroll';
import { useDragDrop } from '@/hooks/dragAndDrop/useDragDrop';
import { useLayoutMeasurement } from '@/hooks/dragAndDrop/useLayoutMeasurement';
import { transformSchedulesToDayData } from '@/libs/schedule/transformSchedulesToDayData ';
import { Plan } from '@/types';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { dummySchedule } from '../dummyData';
import { DayColumn } from './DayColumn';
import DraggablePlanCard from './DraggablePlanCard';
import { FloatingPortalContext } from './FloatingPortal';


interface DayData {
  title: string;
  plans: Plan[];
}

interface DaysData {
  [dayId: string]: DayData;
}
export const TravelPlanKanban = () => {
  // ===== 1. 상태 관리 =====
  const [dayData, setDayData] = useState<DaysData>({});

  // ===== 2. 자동 스크롤 훅 =====
  const {
    scrollViewRef,
    scrollOffsetRef,
    handleScroll,
    handleAutoScrollForDrag,
    stopAutoScroll,
  } = useAutoScroll({
    scrollSpeed: 15,
    threshold: 40,
  });

  // ===== 3. 레이아웃 측정 훅 =====
  const {
    scrollViewLayout,
    dayLayouts,
    cardLayouts,
    containerRef,
    dayRefs,
    measureScrollViewPosition,
    measureDay,
    measureCard,
    remeasureDayLayouts,
    getDropTarget,
  } = useLayoutMeasurement(scrollOffsetRef);

  // ===== 4. 드래그 앤 드롭 훅 =====
  const {
    draggingItem,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  } = useDragDrop({
    scrollOffsetRef,
    measureScrollViewPosition,
    remeasureDayLayouts,
    getDropTarget,
    stopAutoScroll,
    typeToLabel,
    styles,
    FloatingPortalContext,
  });

  // ===== 5. 초기 데이터 로드 =====
  useEffect(() => {
    // 더미 스케줄 데이터를 Day 형식으로 변환
    const transformedData = transformSchedulesToDayData(dummySchedule);
    setDayData(transformedData);
  }, []);

  // ===== 6. Day ref 관리 =====
  const handleDayRefSet = (dayId: string, ref: View | null) => {
    if (ref) {
      dayRefs.current[dayId] = ref;
    }
  };

  const handleEnhancedDragMove = (
    x: number,
    y: number,
    gestureState: any,
    evt: any,
    initialPosition: { x: number; y: number }
  ) => {
    // 자동 스크롤 처리
    if (scrollViewLayout.height) {
      handleAutoScrollForDrag(y, scrollViewLayout);
    }
    
    // 드래그 이동 처리
    handleDragMove(x, y, gestureState, evt, initialPosition);
  };

  const handleEnhancedDragEnd = (y: number) => {
    handleDragEnd(y, dayData, setDayData);
  };

  return (
    <View ref={containerRef} style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {Object.entries(dayData).map(([dayId, data], index) => (
          <DayColumn
            key={dayId}
            dayId={dayId}
            dayData={data}
            index={index}
            draggingItem={draggingItem}
            onLayoutDay={measureDay}
            onLayoutCard={measureCard}
            onDayRefSet={handleDayRefSet}
            onDragStart={handleDragStart}
            onDragMove={handleEnhancedDragMove}
            onDragEnd={handleEnhancedDragEnd}
            styles={styles}
            DraggablePlanCard={DraggablePlanCard}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    width: '100%',
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
  emptyDayDropZone: {
    minHeight: 100,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#F9FAFB',
  },

  emptyDayText: {
    color: '#9CA3AF',
    fontSize: 14,
    fontStyle: 'italic',
  },

  // 드래그 중일 때 비어있는 영역 하이라이트
  emptyDayDropZoneHighlight: {
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },
});

export default TravelPlanKanban;