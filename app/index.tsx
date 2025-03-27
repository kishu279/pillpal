import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { View } from '@/components/Themed';
import Button from '@/components/ui/Button';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pillpal</Text>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
