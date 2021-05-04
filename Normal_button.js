import React from 'react'; 
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function NormalButton ({text, onPress}) { 
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
        backgroundColor: '#28364a',
        marginVertical:15,
        width:180,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText : {
        color:'#FFFFFF',
        fontWeight: 'bold', 
        fontSize: 20, 
        textAlign: 'center'
    },

})