import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image} from 'react-native';
const AboutScreen = ({navigation}) => { 
    return (
      <View style= {styles.container}> 
      <View style= {styles.containerHead}>

    <Text style={styles.textHead}>Community Pantry{'\n'}</Text>
    </View>
   

   <ScrollView>
            <Image style={styles.AbImage} source={require('./img/ab1.jpg')} />
        <Text style={styles.TextBody}>Ana Patricia Non walked along the streets of Maginhawa to find a spot that is both accessible and able to withhold sizable foot traffic. Somewhere in front of a Romantic Baboy and Ministop, she approached the owners of the place where she used to buy vegetables and requested permission to use the space for a community pantry. When it was granted, she rushed home to collect her already-packed goods, called for a tricycle, and quickly made her way back. She set up a bamboo cart along Maginhawa Street and stocked it with rice, vegetables, milk, vitamins, face masks, canned goods, soap and other essentials.
        </Text>
        <Image style={styles.AbImage} source={require('./img/ab2.jpg')} />
        <Text style={styles.TextBody}> Within 24 hours, Non’s post had gone viral across all social media platforms and hundreds of Filipinos were requesting for more information on how they could help further this initiative. To those beyond the radius of Maginhawa, Non urges starting a community pantry of their own. As of April 19, there is a growing list of 28 active community pantries across the Philippines, according to a Facebook post by Non — all inspired by the Maginhawa Community Pantry initiative. According to the organizers, the community pantry has helped 5,000 beneficiaries as of this writing. They also mentioned that donations have been "overflowing" and that they shared them to 15-20 other community pantries. </Text>
        <Image style={styles.AbImage} source={require('./img/ab3.jpg')} />
        <Text style={styles.TextBody}> Cyril Balderama, a dancer/choreographer who also works for the City Government of Valenzuela, had recently begun their own community pantry in Barangay Dalandanan with Valenzuela’s Performing Arts Community. While their local government unit continues to distribute ayuda in their area, Balderama considers this initiative as a more immediate response to the people within the vicinity who are waiting for their household’s share. He recalled that the most important lesson he had learned being in the arts is to become an even better member to the community he is part of.  </Text>
        <Image style={styles.AbImage} source={require('./img/ab4.jpg')} />
        <Text style={styles.TextBody}>New community pantries are being formed each day. However, efforts supporting what Non had started are not limited to the physical spaces they inhabit. People have taken their contributions online in the form of spreading information and step-by-step instructions on how individuals can partake in this movement. </Text>
        </ScrollView>


</View>

   );
};
  export default AboutScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    textAlign: 'center',
    height: 400,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 280,
  },
  AbImage: { 
    height:250,
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
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
  TextBody:{
      color: 'black',
      fontSize:25,
      textAlign:'left',
      padding:30,
 
  },
  textHead:{
    color:'#fff',
    fontSize:30,
    textAlign:'center',
    padding:20,

  },

},
);