

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Landing from './screens/Landing';
import AppNav from './routes/AppNav';


export default function App(){

  return (
    <Provider store={store}>
        {/* <Landing /> */}
        <AppNav />
    </Provider>

   
  ); 
}




