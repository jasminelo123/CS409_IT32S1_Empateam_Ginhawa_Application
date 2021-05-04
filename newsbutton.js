import React from 'react'; 
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function NewButton ({text, onPress}) { 
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
        width:300,
        height:50,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft:20,
        paddingRight:200,
        paddingBottom:15,
    },
    buttonText : {
        color: '#dcf4f5',
        fontWeight: 'bold', 
        fontSize: 15, 
        textAlign: 'center'
    },
    

})