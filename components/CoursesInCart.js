import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globalStyles from '../styles/globalStyles';
// si icon import des icons 



const CoursesInCart = (props) => {
  return (
    <View style={styles.cousesContainer}>
      <Text numberOfLines={1} style={styles.titre}> {props.title } </Text>
      <Text  style={styles.coursePrice}> {props.price.toFixed(2)} &euro;</Text>
      <TouchableOpacity
        // onPress={()=>alert("effacer le course ")}
        onPress={props.onDelete}
      
      >
        {/* icone */}
        <View style={styles.btnDeleteToCart}>
                        <Text style={styles.btntextDeleteToCart}>🚮</Text>
        </View>

      </TouchableOpacity>
    </View>
  )
}

export default CoursesInCart

const styles = StyleSheet.create({
    cousesContainer:{
        backgroundColor :globalStyles.white,
        borderRadius:10,
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center",
        padding:10, 
        marginBottom:9

        },
        titre:{
            width:"60%", 
            // backgroundColor:"red"

        },
        coursePrice:{
            textAlign: "right", 
            paddingRight: 9,
            width:"30%",
            
            // backgroundColor:"blue"

        }
})