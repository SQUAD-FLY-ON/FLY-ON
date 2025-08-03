import { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type TDropdownItem = {
  label: string;
  value: string;
};

const Dropdown = ({ itemProps }: { itemProps: TDropdownItem[] }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(itemProps);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="비행 일정을 선택하세요"
        listMode="SCROLLVIEW"
        style={styles.dropdown}
      />
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 48,
    zIndex: 10,
  },
  dropdown: {
    borderColor: "#ccc",
  },
});
