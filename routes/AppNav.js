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
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

const Stack = createNativeStackNavigator();

function AppNav() {

  return (

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
       
          name="Landing"
          options={{ title: "Landing" }}
          component={Landing}
        />
        <Stack.Screen
          name="Cart"
          options={{ title: "Cart" }}
          component={Cart}
        />
        <Stack.Screen
          name="Details"
          options={{ title: "CourseInfo" }}
          component={CourseInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

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
});

export default AppNav;
