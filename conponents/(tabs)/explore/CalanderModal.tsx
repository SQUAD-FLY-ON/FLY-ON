import CustomButton from "@/conponents/CustomButton";
import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import CustomCalendar from "../schedule/screens/CalanderScreen/Calander";
export default function CalanderModal({ isModalVisible, setIsModalVisible }: { isModalVisible: boolean, setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>> }) {

  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setIsModalVisible(false)}
    >
      <Pressable onPress = {() =>{setIsModalVisible(false)}} style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>
            여행 일정 선택하기
          </Text>
          <Ionicons name="close" size={36} onPress={() => setIsModalVisible(false)} color="#D2D2D2" style = {styles.closeButton}/>
          <Text numberOfLines={2} style={styles.description}>
            해당 체험장을 방문할 여행 일정을{'\n'}
            선택해 주세요
          </Text>
          <CustomCalendar />
          <View style={styles.buttonContainer}>
            <CustomButton text='일정 생성하기' style={styles.button} />
            <CustomButton text='초기화' backgroundColor="#D2D2D2" undo style={styles.button} textStyle={styles.prevText} />
          </View>
        </View>
      </Pressable>
    </Modal>
  )
}
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:100,
  },
  modalContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    minWidth: 310,
    zIndex:200,
  },
  title: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 22,
    fontWeight: 600,
    marginTop: 22,
  },
  description: {
    fontWeight: 400,
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    color: '#747474',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  buttonContainer: {
    width: '100%',
    gap: 8,
    marginTop: 6,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: "Pretendard-Medium",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0,
    fontWeight: 500,
  },
  prevText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 400,
    color: '#747474',
  }
})