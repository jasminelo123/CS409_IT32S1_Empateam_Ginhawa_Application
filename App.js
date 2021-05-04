import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import OnboardingScreen from './OnboardingScreen'; 
import HomeScreen from './HomeScreen';
import DonationScreen from './Islands';
import NewsScreen from './News';
import AboutScreen from './About';
import LuzonScreen from './LuzonCities';
import VisayasScreen from './VisayasCities';
import MindanaoScreen from './MindanaoCities';
import QuezonCityScreen from './QuezonCity';
import PasigCityScreen from './PasigCity';
import ValenzuelaCityScreen from './ValenzuelaCity';
import PantriesScreen from './CommunityPantries';
import ContactPasigScreen from './Contact_Pasig';
import ContactQuezonScreen from './Contact_Quezon';
import ContactValenzuelaScreen from './Contact_Valenzuela';

const AppStack = createStackNavigator(); 

const App = () => { 
  return (
    <NavigationContainer> 
      <AppStack.Navigator
      headerMode= 'none'
      >
        <AppStack.Screen name = "Onboarding" component = {OnboardingScreen} /> 
        <AppStack.Screen name = "Home" component = {HomeScreen} /> 
        <AppStack.Screen name = "About" component = {AboutScreen} /> 
        <AppStack.Screen name = "News" component = {NewsScreen} /> 
        <AppStack.Screen name = "Donation Islands" component = {DonationScreen} /> 
        <AppStack.Screen name = "Luzon" component = {LuzonScreen} /> 
        <AppStack.Screen name = "Visayas" component = {VisayasScreen} /> 
        <AppStack.Screen name = "Mindanao" component = {MindanaoScreen} /> 
        <AppStack.Screen name = "Quezon City" component = {QuezonCityScreen} /> 
        <AppStack.Screen name = "Pasig City" component = {PasigCityScreen} /> 
        <AppStack.Screen name = "Valenzuela City" component = {ValenzuelaCityScreen} /> 
        <AppStack.Screen name = "Community Pantries" component = {PantriesScreen} /> 
        <AppStack.Screen name = "Contact Pasig City" component = {ContactPasigScreen} /> 
        <AppStack.Screen name = "Contact Quezon City" component = {ContactQuezonScreen} /> 
        <AppStack.Screen name = "Contact Valenzuela City" component = {ContactValenzuelaScreen} /> 

      </AppStack.Navigator>
    </NavigationContainer>
  );

}

export default App; 