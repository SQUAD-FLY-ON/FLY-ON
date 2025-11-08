import { DraggingItem, Plan } from "@/types";
import { View } from "react-native";
import EmptyDayDropZone from "./EmptyDayDropZone";
import PlanList from "./PlanList";

// Day 컨텐츠 컴포넌트
interface DayContentProps {
  dayId: string;
  plans: Plan[];
  draggingItem: DraggingItem | null;
  onLayoutCard: (dayId: string, index: number, event: any) => void;
  onDragStart: (item: Plan, dayId: string, index: number, layout: any, position: any) => void;
  onDragMove: (x: number, y: number, gestureState: any, evt: any, initialPosition: any) => void;
  onDragEnd: (y: number) => void;
  styles: any;
  DraggablePlanCard: React.ComponentType<any>;
}

const DayContent: React.FC<DayContentProps> = ({
  dayId,
  plans,
  draggingItem,
  onLayoutCard,
  onDragStart,
  onDragMove,
  onDragEnd,
  styles,
  DraggablePlanCard,
}) => {
  return (
    <View style={styles.dayContent}>
      {plans.length === 0 ? (
        <EmptyDayDropZone 
          isDragging={!!draggingItem} 
          styles={styles} 
        />
      ) : (
        <PlanList
          dayId={dayId}
          plans={plans}
          draggingItem={draggingItem}
          onLayoutCard={onLayoutCard}
          onDragStart={onDragStart}
          onDragMove={onDragMove}
          onDragEnd={onDragEnd}
          styles={styles}
          DraggablePlanCard={DraggablePlanCard}
        />
      )}
    </View>
  );
};

export default DayContent;