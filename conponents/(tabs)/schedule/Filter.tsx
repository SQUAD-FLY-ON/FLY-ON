import CustomButton from "@/conponents/CustomButton";
import { SetStateAction } from "react";
import { ScrollView, StyleSheet } from "react-native";

interface FilterProps {
  filters: {
    key: string;
    text: string;
  }[];
  gap?: number;
  currentFilter: string;
  setCurrentFilter: React.Dispatch<SetStateAction<string>>;
}

export default function Filter({ 
  filters, 
  gap = 12, 
  currentFilter, 
  setCurrentFilter 
}: FilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.scrollContainer, { gap }]}
      style={styles.scrollView}
    >
      {filters.map((item) => (
        <CustomButton
          backgroundColor={currentFilter === item.key ? 'main' : '#EFEFEF'}
          key={item.key}
          textStyle={{ 
            color: currentFilter === item.key ? '#FFFFFF' : '#333333' 
          }}
          text={item.text}
          buttonType="small"
          onPress={() => setCurrentFilter(item.key)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0, // ScrollView가 필요한 공간만 차지하도록
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 0, // 필요에 따라 좌우 패딩 조정
  },
});