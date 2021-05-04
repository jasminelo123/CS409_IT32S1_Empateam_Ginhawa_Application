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
        marginVertical:15,
        width:330,
        height:150,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft:20,
        paddingRight:200,
        paddingBottom:20,
    },
    buttonText : {
        color: '#28364a',
        fontWeight: 'bold', 
        fontSize: 20, 
        textAlign: 'left'
    },

})