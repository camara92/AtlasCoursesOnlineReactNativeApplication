

import React from 'react';
import { Button } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Landing from './screens/Landing';
import AppNav from './routes/AppNav';
import AuthUser from './screens/Authentification/Auth';
import Home from './screens/Home';

export default function App(){

  return (
    <Provider store={store}>
        {/* <Landing /> */}
        <AppNav />
        {/* <Home /> */}
        
      
    </Provider>
        
    

   
  ); 
}




