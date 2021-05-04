import React from 'react'; 
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


export default function NormalButton ({text, onPress}) { 
    return (
        <TouchableOpacity onPress={onPress} >
        <View style={styles.DonateButton}>
        <Text style={styles.buttonText}>{text}</Text>
      
      </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({ 
    DonateButton:{
        backgroundColor: '#28364a',
        width: 150,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 50,
        marginLeft: 20,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      buttonText:{
        justifyContent: 'center',
        color: '#dcf4f5',
        textAlign:'center'
    },
})