import Header from "@/conponents/Header";
import { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { height, width } = Dimensions.get("window");

export default function MyFlightDetails() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View>
      <Header title="비행 기록" backButton={true} />
      <Pressable style={styles.detailButton} onPress={() => setVisible(true)}>
        <Text>비행기록 상세</Text>
      </Pressable>

      <Modal transparent visible={visible}>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <Pressable onPress={() => setVisible(false)}>
                <Text>X</Text>
              </Pressable>
            </View>

            <View style={styles.modalContent}>
              <Text>상세 정보</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  detailButton: {
    padding: 12,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  detailButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)", // 반투명 배경
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: "#222",
    borderRadius: 20,
    overflow: "hidden",
  },
  modalHeader: {
    alignItems: "flex-end",
    padding: 12,
  },
  closeButton: {
    fontSize: 24,
    color: "#fff",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
