import CustomButton from "@/conponents/CustomButton";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface PlaceCardProps {
  selected: boolean;
  image?: string; // 현재는 안 쓰이고 있음
  title: string;
  address: string;
  score: number | string;
  review: number | string;
  onPress: () => void; // 현재는 미사용
};
export default function PlaceCard({ selected, image, title, address, score, review, onPress }: PlaceCardProps) {
  return (
    <Pressable onPress={onPress} style={[styles.container,{ backgroundColor : selected? '#ECF4FE': '#ffffff'}]}>
      <Image style={styles.image} source={image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
        <View style={styles.scoreContainer}>
          <Image source={require('@/assets/images/star.png')} style={styles.star} />
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.review}>({review})</Text>
        </View>
      </View>
      <CustomButton containerStyle={styles.buttonPosition} buttonType="small" text="자세히보기" textStyle={{ lineHeight: 14, fontSize: 14 }} onPress={() => { }} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    borderColor: '#93BEF9',
    borderWidth: 1,
    borderRadius: 12,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius:8.8,
  },
  contentContainer: {
    gap: 4,
  },
  title: {
    // heading4
    fontWeight: 600,
    fontSize: 16,
  },
  address: {
    fontSize: 12,
    color: '#747474',
    fontWeight: 300,
  },
  star: {
    width: 18,
    height: 18,
    marginRight: -3,
  },
  scoreContainer: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    // Paragraph3
    color: '#333333',
    fontSize: 14,
    fontWeight: 600,
  },
  review: {
    fontSize: 12,
    color: '#8E9297',
    fontWeight: 400
  },
  buttonPosition: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  }
})