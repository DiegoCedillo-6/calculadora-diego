import { StyleSheet, View } from 'react-native';
import Boton from './boton';

export default function Rejilla() {
  return (
    <View style={styles.container}>
      {/* Fila 1 */}
      <View style={styles.fila}>
        <Boton texto="C" textStyle={{ color: '#ff5555' }} />
        <Boton texto="()" textStyle={{ color: '#a5a5a5' }} />
        <Boton texto="%" textStyle={{ color: '#007aff' }} />
        <Boton texto="÷" textStyle={{ color: '#007aff', fontSize: 28 }} />
      </View>

      {/* Fila 2 */}
      <View style={styles.fila}>
        <Boton texto="7" />
        <Boton texto="8" />
        <Boton texto="9" />
        <Boton texto="x" textStyle={{ color: '#007aff' }} />
      </View>

      {/* Fila 3 */}
      <View style={styles.fila}>
        <Boton texto="4" />
        <Boton texto="5" />
        <Boton texto="6" />
        <Boton texto="-" textStyle={{ color: '#007aff' }} />
      </View>

      {/* Fila 4 */}
      <View style={styles.fila}>
        <Boton texto="1" />
        <Boton texto="2" />
        <Boton texto="3" />
        <Boton texto="+" textStyle={{ color: '#007aff' }} />
      </View>

      {/* Fila 5 */}
      <View style={styles.fila}>
        <Boton texto="+/-" />
        <Boton texto="0" />
        <Boton texto="." />
        <Boton
          texto="="
          style={styles.equalsButton}
          textStyle={styles.equalsButtonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  equalsButton: {
    backgroundColor: '#007aff', // Botón '=' azul sólido
  },
  equalsButtonText: {
    color: '#ffffff',
    fontSize: 28,
  },
});