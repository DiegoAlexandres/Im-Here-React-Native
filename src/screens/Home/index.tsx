import { Text, View } from 'react-native';
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Hello
      </Text>
      <Text style={styles.evetnDate}>
        Terça, 13 de Fevereiro de 2024
      </Text>
    </View>
  )
}