import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import FlatButton from './Menu_button2' ;


const VisayasScreen = ({navigation}) => { 
    return (
      
        <View style= {styles.container}> 

  
        <View style= {styles.containerHead}>
          
          <Text style={styles.textHead}>Visayas{'\n'}</Text>
        </View>
       
 
         <ScrollView style={{marginTop:-40, zIndex:1}}>
        <Image style={styles.ImageSize2} source={require('./img/boracay.jpg')} />
        <FlatButton text='Boracay'  onPress={ () => navigation.navigate("Quezon City")} />

        <Image style={styles.ImageSize2} source={require('./img/guimaras.jpg')} />
        <FlatButton text='Guimaras'   onPress={ () => navigation.navigate("Quezon City")} />

        <Image style={styles.ImageSize2} source={require('./img/davao.jpg')} />
        <FlatButton text='Bohol'   onPress={ () => navigation.navigate("Quezon City")} />
        </ScrollView>
            </View>
            
    );
};

export default VisayasScreen; 

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
    ImageSize2:{
      height:250,
      width: 320,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginBottom: -50,
      opacity: 0.9
    },
});