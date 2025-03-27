import colors from "@/styles/colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ value }: { value: string }) {
  return (
    <TouchableOpacity
      style={styles.buttonText}
    >
      <Text
        style={styles.buttonTextLabel}
      >{value}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: colors["zinc-200"],
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonTextLabel: {
    color: colors["zinc-900"],
    fontSize: 16,
    fontWeight: '600',
  },
});