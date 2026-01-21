import React from 'react';
import { View } from 'react-native';
import DayContent from './DayContent';
import DayHeader from './DayHeader';

interface Plan {
  key: string;
  place: string;
  address: string;
  image?: string;
  type: string;
  day: string;
}

interface DayData {
  title: string;
  plans: Plan[];
}

interface DraggingItem {
  item: Plan;
  sourceDay: string;
  sourceIndex: number;
}

interface DayColumnProps {
  dayId: string;
  dayData: DayData;
  index: number;
  draggingItem: DraggingItem | null;
  onLayoutDay: (dayId: string, event: any) => void;
  onLayoutCard: (dayId: string, index: number, event: any) => void;
  onDayRefSet: (dayId: string, ref: View | null) => void;
  onDragStart: (item: Plan, dayId: string, index: number, layout: any, position: any) => void;
  onDragMove: (x: number, y: number, gestureState: any, evt: any, initialPosition: any) => void;
  onDragEnd: (y: number) => void;
  styles: any;
  DraggablePlanCard: React.ComponentType<any>;
}

export const DayColumn = ({
  dayId,
  dayData,
  index,
  draggingItem,
  onLayoutDay,
  onLayoutCard,
  onDayRefSet,
  onDragStart,
  onDragMove,
  onDragEnd,
  styles,
  DraggablePlanCard,
}: DayColumnProps) => {
  if (!dayData) return null;

  return (
    <View
      style={[styles.dayColumn, index > 0 && styles.dayColumnSpacing]}
      onLayout={(event) => onLayoutDay(dayId, event)}
      ref={(ref) => onDayRefSet(dayId, ref)}
    >
      {/* Day 헤더 */}
      <DayHeader title={dayData.title} styles={styles} />

      {/* 계획 리스트 */}
      <DayContent
        dayId={dayId}
        plans={dayData.plans}
        draggingItem={draggingItem}
        onLayoutCard={onLayoutCard}
        onDragStart={onDragStart}
        onDragMove={onDragMove}
        onDragEnd={onDragEnd}
        styles={styles}
        DraggablePlanCard={DraggablePlanCard}
      />
    </View>
  );
};

