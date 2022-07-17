import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartCourses= useSelector(state=>state.cart.cartCourses); 
  const total= useSelector(state=>state.cart.total); 
  console.log(cartCourses)
  console.log(total)
  return (
    <View>
      <Text>Bonjour CAMARA Daouda </Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})