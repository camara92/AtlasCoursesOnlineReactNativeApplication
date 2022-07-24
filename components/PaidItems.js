import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../styles/globalStyles';
// import { Icon } from 'react-native-vector-icons/icon';
import {Icon }from 'react-native-vector-icons/FontAwesome';
import CoursesOverview from './CoursesOverview';

const PaidItems = ({ totalPrice, date,title, courseDetails }) => {

  const [isShowing, setisShowing] = useState(false);

  const handleShow=()=>{
    setisShowing(prevState =>!prevState)
  }
  // const handleShowLess=()=>{
  //   setisShowing(prevState =>prevState)
  // }
  console.log(totalPrice);
  // console.log(title);
  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.total}> {totalPrice.toFixed(2)} &euro;</Text>
        <Text style={styles.date}> { date} </Text>
        {/* <Text style={styles.title}>Achats {title} </Text> */}
      </View>
      <TouchableOpacity
        styele={styles.iconbtn}
        style={styles.btnclick}
              
              color="black"
               onPress={handleShow}
      >
        {/* <Button
              style={styles.btnclick}
              title={isShowing ? "-" : "+"} 
              color="black"
               onPress={handleShow}
              // name={isShowing ? "moins" : "plus"} 
              
            /> */}
        
          
  

      </TouchableOpacity>
      {
        isShowing &&  (
          <View style={styles.detailPaidCourses}>
            {
              courseDetails.courses.map( (courses)=>(
                <CoursesOverview 
                  key={courses.id}
                  title={courses.title}
                  price={courses.price}


                />
              ))
            }
          </View>
        )
      }
    </ScrollView>
  )
}

export default PaidItems;

const styles = StyleSheet.create({
  paidCoursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    margin: 10,
    padding: 15,
  
   
  },
  paidCourses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  total:{
    fontSize:18, 

  }, 
  date:{
    fontSize:16
  }, 
  iconbtn:{
    alignSelf:"flex-end"
  },

  title:{
    color: "red", 
    
  },
  btnclick:{
    flexDirection:"column", 
    width:"10%"
  }, 
  detailPaidCourses:{
    marginTop:15,
    borderTopColor:globalStyles.lightGrey, 
    borderTopWidth: 1
  }
})
