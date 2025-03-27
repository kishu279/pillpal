import colors from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

export default function register() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Register</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textStyle: {
    textAlign: "center",
    marginTop: 10,
    color: colors["zinc-500"]
  }
})
