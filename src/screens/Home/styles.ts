import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      paddingTop: 75, 
      paddingLeft: 24,
      paddingRight: 24,
    },
  
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
    },
  
    evetnDate: {
      color: '#6B6B6B',
      fontSize: 16,
      marginTop: 4,
    },

    input: {
      flex: 1,
      height: 56,
      backgroundColor: "#1F1E25",
      borderRadius: 4,
      padding: 16,
      color: "#fff",
      fontSize: 16,
    },

    button: {
      width: 56,
      height: 56,
      backgroundColor: "#31CF67",
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center"
    },

    buttonText: {
      color: "#fff",
      fontSize: 24,
    },

    form: {
      width: "100%",
      flexDirection: "row",
      marginTop: 34,
      marginBottom: 42,
      gap: 8,
    }, 

    title: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 16,

  },

  })