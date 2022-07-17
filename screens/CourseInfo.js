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
      <Text>CourseInfo</Text>
      <Text>Description : { SelectedCourse.description }</Text>
    </View>
  )
}

export default CourseInfo

const styles = StyleSheet.create({})