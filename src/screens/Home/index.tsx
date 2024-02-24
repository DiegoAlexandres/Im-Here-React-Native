import { Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles'

export function Home() {
  const participants = ["Diego", "Alexandre", "João", "José", "Maria", "Pedro", "Ana", "Larissa", "Douglas", "Elaine", "Carol"];
  
  function hundleParticipantAdd() {
    return(
      console.log("Participante adicionado!")
    );
  }

  function hundleParticipantRemove(name: string) {
    return(
      console.log(`Você clicou em remover o partifipante: ${name}`)
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

      <Text style={styles.title}>
        Participantes
      </Text>
      
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
          key={item}
          name={item} 
          onRemove={() => hundleParticipantRemove("Diego Alexandre")}/>    

        )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
            </Text>
          )}
      />

    </View>
  )
}