import React from 'react';
import { StyleSheet, View} from 'react-native'; 

export default function Card (props) { 
    return (
        <View style = { styles.card}>
             <View style = { styles.cardContent}>
                {props.children}

             </View>
             </View>
    )

}

const styles = StyleSheet.create ({
    card: {
        borderRadius: 8, 
        elevation: 3, 
        backgroundColor: '#dcf4f5', 
        shadowOffset: {width: 3, height: 3},
        shadowColor: '#333', 
        shadowOpacity: 0.5, 
        shadowRadius: 2,
        marginVertical:6,
        width:330,
    },
    cardContent: {
        marginHorizontal: 18, 
        marginVertical:10,


    },


}
)