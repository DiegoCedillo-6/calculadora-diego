import { SafeAreaView, StyleSheet } from 'react-native';
import Display from '../../components/botones/display';
import Rejilla from '../../components/botones/rejilla';
export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Zona superior: Pantalla con el 0 inicial limpio */}
      <Display />
      
      {/* Zona inferior: Rejilla de botones con acento azul */}
      <Rejilla />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});