import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
// import text if data empty 
import EmptyMsg from '../components/EmptyMsg';
import { useSelector } from 'react-redux';
import CoursesItem from '../components/CoursesItem';

const Landing = () => {
    const existingCourses= useSelector(state=>state.courses.existingCourses); 
    // condition 
    if(existingCourses.length){

      return (
        <FlatList
          data= {existingCourses}
          renderItem={({item})=>(
              <CoursesItem 
             
              titre={item.title}
              imagee={item.image}
              prix={item.price}
              viewDetails={()=>alert("Details")}
              OnAddToCart={()=>alert("Panier")}
  
              />
          )}
        
         />
      );
    }
    return (
      <EmptyMsg text= "Il n'y a pas de cours à afficher ! 😎"/>
    )
}

const styles = StyleSheet.create({})

export default Landing;
