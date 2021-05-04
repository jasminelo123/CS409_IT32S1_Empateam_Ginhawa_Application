import React from 'react'; 
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function FlatButton ({text, onPress}) { 
    return (
        <TouchableOpacity onPress={onPress} >
        <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      
      </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({ 
    button: { 
        borderRadius: 20, 
        backgroundColor: '#dcf4f5',
        width:330,
        height:50,
        justifyContent: 'center',
        paddingLeft:20,
        paddingBottom:20,
        marginTop: 20,
        marginBottom: 10,
    },
    buttonText : {
        color: '#28364a',
        fontWeight: 'bold', 
        fontSize: 20, 
        textAlign: 'center',
        padding: 5,
        justifyContent: 'center',
        marginTop: 5
    },

})