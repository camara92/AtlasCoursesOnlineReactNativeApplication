import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';
//
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import des icons
// import { MaterialIcons } from '@expo/vector-icons';
// import { Icon } from 'react-native-vector-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

const CoursesItem = props => {
  return (
    <TouchableHighlight
      onPress={props.viewDetails}
      underlayColor={globalStyles.green}>
      <View style={styles.courseContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: props.imagee}} style={styles.image} />
        </View>
        <View style={styles.CourseContainerDetails}>
          <Text style={styles.CourseTitle}>Titre: {props.titre}</Text>
          <Text style={styles.CoursePrice}>
            {' '}
            {props.prix.toFixed(2)} &euro;
          </Text>
        </View>
        <View style={styles.iconContainer}>
          {/* <FontAwesome5 name={'comments'} 
              size={50} solid
            />
            <FontAwesome5 name={'comments'} 
              size={50} solid
            />
            */}
          {/* mettre de touchable opacity pour les rendre cliquabe  */}
          {/* touchablehighlight : element cliquable  */}
          <TouchableOpacity>
            <Text style={styles.iconReplaceIcons}>Voir </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.OnAddToCart}>
            <Text style={styles.iconReplaceIcons}>Panier </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    height: 300,
    margin: 25,
    borderColor: globalStyles.lightGrey,
    borderWidth: 1,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius:10, 
    borderTopRightRadius:10,
    overflow:"hidden", 
    
  },
  image: {
    width: '100%',
    height: '100%',
  },
  CourseContainerDetails: {
    alignItems: 'center',
    height: '20%',
    padding: 10,
  },
  CourseText: {
    fontSize: 18,
    marginVertical: 4,
    color: globalStyles.green,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  CourseTitle: {
    color: globalStyles.green,
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
  },
  iconReplaceIcons: {
    color: 'blue',
    margin: 2,
    fontWeight: 'bold',
  },
});

export default CoursesItem;
