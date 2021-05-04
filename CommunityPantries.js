import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FlatButton2 from './Menu_button2' ; 



const DonationScreen = ({navigation}) => { 
  return (
      
    <View style= {styles.container}> 


    <View style= {styles.containerHead}>
     
     <Text style={styles.textHead}>Community Pantry,{'\n'}</Text>
    </View>
     <ScrollView style={{marginTop:-40, zIndex:1}}>
         <Image style={styles.ImageSize2} source={require('./img/maginhawa.jpg')} />
        <FlatButton2 text='Quezon City'  onPress={ () => navigation.navigate("Quezon City")} />
     
         <Image style={styles.ImageSize2} source={require('./img/davao.jpg')} />
         <FlatButton2 text='Davao City'  onPress={ () => navigation.navigate("Quezon City")} />
     
         <Image style={styles.ImageSize2} source={require('./img/pasig.jpg')} />
         <FlatButton2 text='Pasig City'  onPress={ () => navigation.navigate("Pasig City")} />
     
         <Image style={styles.ImageSize2} source={require('./img/valenzuela.jpg')} />
         <FlatButton2 text='Valenzuela City'  onPress={ () => navigation.navigate("Valenzuela City")} />
     
         <Image style={styles.ImageSize2} source={require('./img/boracay.jpg')} />
         <FlatButton2 text='Boracay'  onPress={ () => navigation.navigate("Boracay")} />
     
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
    text:{
      color: '#28364a',
      fontSize:20,
      textAlign:'center',
      paddingLeft:20,  
      marginBottom: 30,  
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
    ImageSize2:{
        height:300,
        width: 320,
        padding: 5,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        marginBottom: -50,
      },
      ImageSize:{
        height:30,
        width: 30,
        padding: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        
      },
        
});