import {StyleSheet, Text, View, ScrollView, Image, Button,

TouchableOpacity
} from 'react-native';
import React, {useEffect} from 'react';
// import icons 
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import globalStyle from '../styles/globalStyles'
const CourseInfo = ({navigation, route}) => {
  // recuperer les cours selon id
  const courseId = route.params.courseId;
  // console.log(courseId);

  const SelectedCourse = useSelector(state =>
    state.courses.existingCourses.find(course => course.id === courseId),
  );

  //  useEffect(()=>{
  //   navigation.setOptions(
  //     {title: SelectedCourse.title}
  //   )
  //   //ajout de ce titre et affiche dans le header
  //  }, [navigation]);

  return (
    <View>
      <ScrollView style={styles.scroll}>
        <Image 
        style={styles.courseImage}
        source={{ uri: SelectedCourse.image}}
       />
       <View style={styles.courseDetails}>
          
        <Text style={styles.courseDescription}>Description : {SelectedCourse.description}</Text>
        <Text style={styles.courseDescription}>Description : {SelectedCourse.description}</Text>
           <Text style={styles.courseDescription}>Description : {SelectedCourse.description}</Text>
          <Text style={styles.courseDescription}>Description : {SelectedCourse.description}</Text>
          <Text style={styles.courseDescription}>Description : {SelectedCourse.description}</Text>
           <Text style={styles.courseDescription}>Description : {SelectedCourse.description}</Text>
        </View>
       </ScrollView>
    <View style={styles.footerContainer}>
        <View style={styles.footerTop}>
            <View style={styles.coursePriceWrapper}>
            <Text style={styles.coursePrice}>Prix de la formation : {SelectedCourse.price.toFixed(2)}&euro;</Text>
            </View>
          </View>
          <View style={styles.footerBottom}>
                {/* encore des icons  */}
                {/* <FontAwesome5  */}
                <Button
                name ="arrow-back"
                title="Retour"
                size={24}
                onPress={() => navigation.goBack('Cart')}
                 >Retour
                 
                 </Button>
                 <TouchableOpacity 
                  onPress={() => alert('Ajouter le cours dans mon panier ')}
                 >

                    <View style={styles.btnAddToCart}>
                        <Text>Ajouter au panier </Text>
                    </View>
                 </TouchableOpacity>
            
                 {/* /> */}
          </View>
    </View>
  </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  scroll: {
    height: "80%" 

  }, 
  courseImage: {
    width:"100%", 
    height:250, 
  }, 
  courseDetails:{
    padding:20, 
    alignItems: "center"
  },
  courseDescription:{
    color: globalStyle.dimGrey, 
    fontSize:17, 
    marginHorizontal: 20, 
    marginVertical:10, 


  }
  , footerContainer:{
    height:"20%", 
    backgroundColor:"red"
  }
  
  , footerTop:{
    height:"40%", 
    alignItems: "flex-end", 
    justifyContent: "center"

  }, 
  coursePriceWrapper:{
    paddingRight:40, 

  }, 
  coursePrice:{
    fontSize: 24, 
    color: globalStyle.green, 

  }, 
  footerBottom:{
    backgroundColor:globalStyle.green,
    height: "60%", 
    flexDirection:"row",
    alignItems:"center", 
    justifyContent: "space-between", 
    paddingHorizontal: 30


  },
  btnAddToCart:{
    borderRadius:10, 
    paddingVertical: 9, 
    paddingHorizontal:25, 
    backgroundColor:globalStyle.lightOrange
  }
});
