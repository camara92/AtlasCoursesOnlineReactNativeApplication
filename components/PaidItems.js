import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PaidItems = ({ totalPrice, date }) => {
    console.log(totalPrice); 
    
  return (
    <View>
      <Text>Paiements effectués : {totalPrice} </Text>
    </View>
  )
}

export default PaidItems

const styles = StyleSheet.create({})