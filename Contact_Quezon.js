import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
const Contact_Quezon = ({navigation}) => { 
    return (
        
      <View style= {styles.container}> 
        
      <Text style={styles.textHead}>Contact Details{'\n'}</Text>

      <View style= {styles.containerHead}>
    
         <Text style={styles.textHeadCenter}>{'\n'}{'\n'}Contact Person</Text>
         <Text style={styles.textBody}>David Castro{'\n'}{'\n'}</Text>

         <Text style={styles.textHeadCenter}>Contact Number/s</Text>
         <Text style={styles.textBody}>09353676890{'\n'}{'\n'}</Text>

         <Text style={styles.textHeadCenter}>Bank Details</Text>
         <Text style={styles.textBody}>GCASH: 09353676890</Text>
        </View>
      
     </View>
    );
};


export default Contact_Quezon; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#dcf4f5',
    paddingTop:100,
    textAlign:'center',
    padding:20
  },
   textHead:{
    color: '#28364a',
    fontSize:25,
    textAlign:'left',
    },
    textHeadCenter:{
      color: '#28364a',
      fontSize:25,
      textAlign:'center',
    },
    textBody:{
      fontSize:20,
      textAlign:'center',
    },
    containerHead:{
      flex: 1,
      // justifyContent: 'flex-end',
      // alignSelf: 'stretch',
      backgroundColor:'#fff',
      borderTopRightRadius:50,
      borderTopLeftRadius:50,
      padding:20,
      fontWeight:'bold',
    },

});