import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";

type Props = TouchableOpacityProps;

function Button({ ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.touchable} {...rest}>
      <Text style={{ fontSize: 20, color: "white" }}>Enviar</Text>
    </TouchableOpacity>
  );
}

export { Button };

const styles = StyleSheet.create({
  touchable: {
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 165, 0, 0.8)",
  },
});
