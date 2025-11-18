import { Fragment } from "react";
import { View } from "react-native";

interface Plan {
  key: string;
  place: string;
  address: string;
  image?: string;
  type: string;
  day: string;
}

interface DraggingItem {
  item: Plan;
  sourceDay: string;
  sourceIndex: number;
}

// 계획 리스트 컴포넌트
interface PlanListProps {
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

const PlanList: React.FC<PlanListProps> = ({
  dayId,
  plans,
  draggingItem,
  onLayoutCard,
  onDragStart,
  onDragMove,
  onDragEnd,
  styles,
  DraggablePlanCard,
}: PlanListProps) => {
  return (
    <>
      {plans.map((plan, planIndex) => (
        <Fragment key={plan.key}>
          <View onLayout={(event) => onLayoutCard(dayId, planIndex, event)}>
            <DraggablePlanCard
              item={plan}
              index={planIndex}
              dayId={dayId}
              isLast={planIndex === plans.length - 1}
              onDragStart={onDragStart}
              onDragMove={onDragMove}
              onDragEnd={onDragEnd}
              isDragging={draggingItem?.item.key === plan.key}
            />
          </View>
        </Fragment>
      ))}
    </>
  );
};

export default PlanList;