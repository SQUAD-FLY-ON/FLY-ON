import { Option } from "@/types";
import { useFocusEffect } from "@react-navigation/native";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = ({
  itemProps,
  value,
  setValue,
  setHasValue,
}: {
  itemProps: Option[];
  value: null | string;
  setValue: Dispatch<SetStateAction<null | string>>;
  setHasValue: Dispatch<SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(itemProps);

  console.log("드롭다운 아이템 props: ", items);

  useEffect(() => {
    setItems(itemProps);
  }, [itemProps]);

  useEffect(() => {
    if (value !== null) setHasValue(true);
  }, [value]);

  useFocusEffect(
    useCallback(() => {
      setOpen(false);
      setValue(null);
    }, [])
  );

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
        ListEmptyComponent={() => (
          <View style={styles.emptyDropdown}>
            <Text>비행 일정이 없습니다!</Text>
          </View>
        )}
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
  emptyDropdown: {
    borderColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});
