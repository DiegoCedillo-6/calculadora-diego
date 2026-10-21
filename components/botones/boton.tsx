import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface BotonProps {
  texto: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Boton({ texto, onPress, style, textStyle }: BotonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#2a2a2a', // Fondo circular de los botones
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '400',
  },
});