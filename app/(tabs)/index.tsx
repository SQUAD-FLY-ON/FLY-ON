import Community from '@/conponents/main/Community';
import Footer from '@/conponents/main/Footer';
import NearActivity from '@/conponents/main/NearActivity';
import { ScrollView, StyleSheet } from 'react-native';

export default function Index() {
  return (
   <ScrollView
      style={styles.container}
    >
      <NearActivity />
      <Community />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    backgroundColor: '#ECF4FE',
  },
});
