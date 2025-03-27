import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button() {
  return (
    <TouchableOpacity
      style={styles.buttonText}
    >
      <Text>Lmao</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  }
})