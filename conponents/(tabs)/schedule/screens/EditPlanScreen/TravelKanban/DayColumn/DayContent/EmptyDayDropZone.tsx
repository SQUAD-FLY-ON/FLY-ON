import { Text, View } from "react-native";

// 빈 Day 드롭존 컴포넌트
interface EmptyDayDropZoneProps {
  isDragging: boolean;
  styles: any;
}

const EmptyDayDropZone= ({ isDragging, styles }: EmptyDayDropZoneProps) => (
  <View
    style={[
      styles.emptyDayDropZone,
      isDragging && styles.emptyDayDropZoneHighlight,
    ]}
  >
    <Text style={styles.emptyDayText}>
      여기에 일정을 드래그하세요
    </Text>
  </View>
);

export default EmptyDayDropZone;

