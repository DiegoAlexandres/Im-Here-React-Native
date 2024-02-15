import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'

interface Name {
    name: string;
}

export function Participant({ name }: Name) {
    
    return(       
        <View style={styles.participant}>               
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>

        </View>
    )
}