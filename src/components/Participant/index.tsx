import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'

interface Name {
    name: string;
    onRemove: () => void;
}

export function Participant({ name, onRemove }: Name) {
    
    return(       
        <View style={styles.participant}>               
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>

        </View>
    )
}