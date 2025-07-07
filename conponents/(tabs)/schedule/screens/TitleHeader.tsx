import { StyleSheet, Text, View } from "react-native";

export default function TitleHeader({ title, description }: { title: string; description: string }) {
  return (<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>)
}
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 28,
    gap: 8,
    alignItems: 'center',
  },
  title: {
    // Heading3
    fontWeight: 600,
    fontSize: 22,
  },
  description: {
    // Paragraph4
    fontSize: 14,
    fontWeight: 400,
    color: '#747474',
  }
})