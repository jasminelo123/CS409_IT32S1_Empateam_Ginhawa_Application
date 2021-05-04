import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import DonateButton from './Donate_Button';

const LuzonScreen = ({navigation}) => { 
    return (
      
        <View style= {styles.container}> 
         <Image style={styles.Image} source={require('./img/pasig.jpg')} />
          
          <View style={styles.container2}>
            <Text style={styles.TextTitle}>Pasig City Pantry</Text>
            <Text style={styles.TextBody}>For more information click donate now for more information and available hours
            {'\n'}. Spread kindness.</Text>
            <Text style={styles.TextLocation}>Pasig Greenpark Village in Barangay Manggahan, Pasig City</Text>
            <Text style={styles.TextBody}>Location</Text>
            <DonateButton text='Donate Now' onPress={ () => navigation.navigate("Contact Pasig City")} />
         </View>
       
        </View>
            
    );
};

export default LuzonScreen; 

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   backgroundColor:'#fff',
    // },
    Text:{
        justifyContent: 'center',
        color: '#dcf4f5',
    },
    TextTitle:{
        fontSize:25,
        letterSpacing: 10,
        padding: 10,
        textAlign:'center',
        marginLeft: 10,
        marginRight: 10
      },
    container2:{
        fontFamily: 'Helvetica',
        textAlign: 'center',
        height: 400,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 280,
        backgroundColor: 'white',
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
        height:500,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingBottom:50,
        paddingHorizontal:20,
      },


      Image:{
        height:410,
        width: 410,
        alignItems: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'absolute',
      },

      TextBody:{
        fontSize:12,
        letterSpacing: 6,
        textAlign:'center',
        position: 'relative',
        marginLeft: 40,
        marginRight: 40, 
        marginTop: 20,
        
      },
      TextLocation:{
        width: 350,
        textAlign:'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 50,
        letterSpacing: 3,
        marginTop:20,
        borderColor:'black',
        borderWidth: 1,
        marginLeft: 'auto',
        marginRight:'auto',
        fontSize: 12,
        padding: 5
      }

});