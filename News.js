import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Linking} from 'react-native';
import NewButton from './newsbutton' ; 
import Card from './card'
const NewsScreen = ({navigation}) => { 
    return (
      <ScrollView>
      <View style= {styles.container}> 
      <View style= {styles.containerHead}>
    <Text style={styles.textHead}>News and Articles</Text>
   </View>
         <Card> 
         <Image source={require('./img/maginhawa.jpg')} style={{height: 250, width: null, flex: 1}}/>
         <Text style={styles.textDesc}>
           Maginhawa community pantry now delivers goods to barangays in Diliman... via Inquirer
{'\n'}</Text>
         <NewButton text='Read More'  onPress={() => {
              Linking.openURL('https://newsinfo.inquirer.net/1424182/maginhawa-community-pantry-now-delivers-goods-to-barangays-in-diliman ');
            }} />
         </Card>
         <Card> 
         <Image source={require('./img/news2.jpg')} style={{height: 250, width: null, flex: 1}}/>
         <Text style={styles.textDesc}>
         Give what you can, take what you need: Catholic sisters join community food pantry effort in the Philippines via GlobalSistersReport
         {'\n'}</Text>
         <NewButton text='Read More'  onPress={() => {
              Linking.openURL('https://www.globalsistersreport.org/news/ministry/news/give-what-you-can-take-what-you-need-catholic-sisters-join-community-food-pantry');
            }} />
         </Card>
         <Card> 
         <Image source={require('./img/news3.jpg')} style={{height: 250, width: null, flex: 1}}/>
         <Text style={styles.textDesc}>
         Community pantries good for people's wellness - DOH 
                   {'\n'}</Text>
         <NewButton text='Read More'  onPress={() => {
              Linking.openURL('https://news.abs-cbn.com/news/04/19/21/community-pantry-philippines-wellness-people');
            }} />
         </Card>
         <Card> 
         <Image source={require('./img/ab1.jpg')} style={{height: 250, width: null, flex: 1}}/>
         <Text style={styles.textDesc}>
         What the community pantry movement means for Filipinos
                  {'\n'}</Text>
         <NewButton text='Read More'  onPress={() => {
              Linking.openURL('https://cnnphilippines.com/life/culture/2021/4/19/community-pantry-filipinos-pandemic.html');
            }} />
         </Card>
         <Card> 
         <Image source={require('./img/news5.jpg')} style={{height: 250, width: null, flex: 1}}/>
         <Text style={styles.textDesc}>
         COVID food pantry operators draw accusations of communism in the Philippines
                  {'\n'}</Text>
         <NewButton text='Read More'  onPress={() => {
              Linking.openURL('https://www.cbsnews.com/news/philippines-covid-community-food-pantry-accusations-communism-red-tagging/');
            }} />
         </Card>
     </View>
     </ScrollView>
    );
};

export default NewsScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   textHead:{
      color:'#FFFFFF',
      fontSize:30,
      textAlign:'center',
      padding:20,
  
    },
    ImageSize:{
      height:20,
      width: 10,
      padding: 5,
      marginLeft: 'auto',
      marginRight: 'auto',
      opacity: 0.1,
  
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
    textDesc:{
      color: 'black',
      fontSize:25,
      textAlign:'left',
      paddingLeft:20
    },
});