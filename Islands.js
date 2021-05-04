import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import FlatButton from './Menu_button' ; 


const DonationScreen = ({navigation}) => { 
  return (
      
    <View style= {styles.container}> 


    <View style= {styles.containerHead}>
        
     <Text style={styles.textHead}>Community Pantry,{'\n'}</Text>
    </View>
     <ScrollView style={{marginTop:-40, zIndex:1}}>
    <FlatButton text='Luzon'    onPress={ () => navigation.navigate("Luzon")} />
    <FlatButton text='Visayas'   onPress={ () => navigation.navigate("Visayas")} />
    <FlatButton text='Mindanao'   onPress={ () => navigation.navigate("Mindanao")} />
    <FlatButton text='Community Pantries'    onPress={ () => navigation.navigate("Community Pantries")} />
    </ScrollView>
        </View>
        
);
};

export default DonationScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
  },
    textHead:{
      color: '#fff',
      fontSize:25,
      textAlign:'left',
      paddingLeft:20,  
      marginTop: 30,  
    },
    containerHead:{
      alignSelf: 'stretch',
      backgroundColor:'#28364a',
      height:200,
      borderBottomRightRadius:50,
      borderBottomLeftRadius:50,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingBottom:50,
      paddingHorizontal:20,
    },
      
});