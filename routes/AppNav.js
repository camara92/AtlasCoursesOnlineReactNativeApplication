import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import AuthScreen from "./screens/AuthScreen";
// import OfficeScreen from "./screens/OfficeScreen";
// import HomeScreen from "./screens/HomeScreen";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Cart from '../screens/Cart';
import CourseInfo from '../screens/CourseInfo';
import Landing from '../screens/Landing';
import globalStyles from '../styles/globalStyles';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Payments from '../screens/Payments';
// import de headerIcon
import CustomHeaderIcon from '../components/CustomHeaderIcon';
import AuthUser from '../screens/Authentification/Auth';
const Stack = createNativeStackNavigator();

function AppNav({navigation}) {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        // style header

        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: globalStyles.green,
            AlignItems: 'center',
          },
          headerTitleStyle: {fontWeight: 'bold'},
          headerTintColor: globalStyles.white,
          // les icones à droit du header
          headerRight: () => (
            // <HeaderButtons>
            //   <Item

            //     title="Panier"
            //     iconName = "card"

            //   />
            // </HeaderButtons>
            <Button
              style={styles.btnheader}
              // title="🛒"
              title="Mon panier"
              color="red"
              // onPress={() => alert('Bouton qui remplace l\'icon panier à voir ultérieurement')}
              onPress={() => navigation.navigate('Cart')}
            />
            // mes achats
            // page inscription 
        
          ),
          headerLeft: () => (
            // <HeaderButtons>
            //   <Item

            //     title="Panier"
            //     iconName = "card"

            //   />
            // </HeaderButtons>
            <Button
              style={styles.btnheader}
              // title="🛒"
              title="Achats"
              color="black"
              // onPress={() => alert('Bouton qui remplace l\'icon panier à voir ultérieurement')}
              onPress={() => navigation.navigate('Payments')}
            />
            
            // mes achats
          ),
        
       
        })}>
        <Stack.Screen
          name="Landing"
          options={{title: 'Cours'}}
          component={Landing}
          options={{
            title: 'Catalogue',
          }}
        />
        <Stack.Screen name="Cart" options={{title: 'Cart'}} component={Cart} />
        <Stack.Screen
          name="Details"
          options={{title: 'Détails'}}
          component={CourseInfo}
          // options pour afficher les infos en titre ou dans la suite de l'écran
          options={({route}) => ({
            title: route.params.title,
          })}
        />
        <Stack.Screen
          name="Payments"
          options={{title: 'Mes achats'}}
          component={Payments}
        />
         <Stack.Screen
          name="Inscription"
          options={{title: 'Inscription'}}
          component={AuthUser}
        />
         <Stack.Screen
          name="AppNav"
          options={{title: 'AppNav'}}
          component={AuthUser}
        />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  btnheader: {
    color: 'red',
  },
});

export default AppNav;
