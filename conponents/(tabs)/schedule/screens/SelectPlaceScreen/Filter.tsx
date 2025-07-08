import CustomButton from "@/conponents/CustomButton";
import { SetStateAction } from "react";
import { StyleSheet, View } from "react-native";
interface FilterProps {
  filters: {
    key: string;
    text: string;
  }[],
  currentFilter: string;
  setCurrentFilter: React.Dispatch<SetStateAction<string>>;
}
export default function Filter({ filters, currentFilter, setCurrentFilter }: FilterProps) {
  return (<View style={styles.container}>
    {
      filters.map((item) => (
        <CustomButton backgroundColor={`${(currentFilter === item.key) ? 'main' : '#EFEFEF'}`} key={item.key} textStyle={{ color: `${(currentFilter === item.key) ? '#FFFFFF' : '#333333'}` }} text={item.text} buttonType="small" onPress={() => { setCurrentFilter(item.key) }} />
      ))
    }
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
  }
}) 