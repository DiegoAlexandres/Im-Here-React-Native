import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'

export function Home() {
  
  function hundleParticipantAdd() {
    return(
      console.log("Participante adicionado!")
    );
  }
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.evetnDate}>
        Terça, 13 de Fevereiro de 2024
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor= "#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={hundleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

      </View>


    </View>
  )
}