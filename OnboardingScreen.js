import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import NormalButton from './Normal_button' ; 


const OnboardingScreen = ({navigation}) => { 
    return (
      <View style= {styles.container}> 
<ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('./img/bg.jpg')}>


</ImageBackground>
      <Text style={styles.textHead}>Ginhawa</Text>
      <Text style={styles.text}>Our application will show an overview of the community pantry held in the Philippines. Ginhawa will help people to deepen their understanding of how Filipino shows their compassion and solicitude towards its citizen. User can also see the information where they can donate or even the location of the pantry in three island groups in the Philippines, which is Luzon, Visayas, and Mindanao.</Text>
      <View style= {styles.Button}>
      <NormalButton text='Lets get started'onPress={ () => navigation.navigate("Home")} />
      </View>
      </View>

    );
};

export default OnboardingScreen; 

const styles = StyleSheet.create({
    Button: {
      paddingTop:10,
        padding:10,
        height: 200,
        justifyContent: "flex-end",
bottom:115,
        flex: 1
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textHead:{
      position: 'absolute',
      top: 3,
        color:'#FFFFFF',
        fontSize:40,
        textAlign:'center',
        paddingTop:25,
        padding:10,

      },
      text:{
        position: 'absolute',
        top: 6,
        color:'#FFFFFF',
        fontSize:16,
        fontWeight: 'bold',
        textAlign:'center',
        paddingTop:100,
        padding:10,
      },

      imgBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.7
},
});