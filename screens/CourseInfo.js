import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'

import { useSelector } from 'react-redux'; 
const CourseInfo = ({navigation, route}) => {
  // recuperer les cours selon id 
  const courseId= route.params.courseId
  // console.log(courseId); 

  const SelectedCourse = useSelector(state => state.courses.existingCourses.find(course =>course.id===courseId));

  //  useEffect(()=>{
  //   navigation.setOptions(
  //     {title: SelectedCourse.title}
  //   )
  //   //ajout de ce titre et affiche dans le header 
  //  }, [navigation]); 

  return (
    <View>
    
      <Text>Titre de la formation : {SelectedCourse.title }</Text>
      <Text>Description : { SelectedCourse.description }</Text>
      <Text>Prix de la formation  : { SelectedCourse.price }&euro;</Text>
    </View>
  )
}

export default CourseInfo

const styles = StyleSheet.create({})