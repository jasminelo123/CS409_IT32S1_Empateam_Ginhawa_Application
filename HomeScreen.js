import React from 'react';
import { ScrollView, View, Text, StyleSheet} from 'react-native';
import FlatButton from './Menu_button' ; 

const HomeScreen = ({navigation}) => { 
    return (
      
        <View style= {styles.container}> 

  
        <View style= {styles.containerHead}>
      
        <Text style={styles.textHead}>Welcome,{'\n'}</Text>
        </View>
       
 
         <ScrollView style={{marginTop:-40, zIndex:1}}>
        <FlatButton text='About/ Overview'  onPress={ () => navigation.navigate("About")} />
        <FlatButton text='News/ Articles'   onPress={ () => navigation.navigate("News")} />
        <FlatButton text='Donation Drive'   onPress={ () => navigation.navigate("Donation Islands")} />
        </ScrollView>
            </View>
            
    );
};

export default HomeScreen; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#fff',
    },

    ImageSize:{
      height:30,
      width: 30,
      padding: 5,
      marginLeft: 'auto',
      marginRight: 'auto',

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