import { StyleSheet, Text, View } from 'react-native';

export default function Display() {
  return (
    <View style={styles.container}>
      {/* Operación previa arriba cuyo resultado da 0 */}
      <Text style={styles.subResultado} numberOfLines={1} adjustsFontSizeToFit>
        5 - 5
      </Text>
      
      {/* Resultado Principal en grande */}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        0
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
  subResultado: {
    color: '#a5a5a5',
    fontSize: 32,
    fontWeight: '300',
    marginBottom: 4,
  },
  resultado: {
    color: '#ffffff',
    fontSize: 54,
    fontWeight: '300',
  },
});