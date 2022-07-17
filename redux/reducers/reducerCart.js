import PaieCourse from "../../data/PaidCourseModel"
import { ADD_TO_CART } from "../constants";
const initialState = {
    // un array qui va contenir les cours existants 
    //id, price et le titre 
    //fichier dans data 
    cartCourses : [], 
    total: 0
}

const reducerCart = (state = initialState, action )=>{
    // switch case 
    switch(action.type){
        case ADD_TO_CART: 
        const course = action.course; 
        const idCourse = course.id; 
        const price =course.price; 
        const title= course.title; 

        // instanciation de la classe : 
        const newCourse = new PaieCourse(idCourse, price, title); 
        return {
            ...state, 
            cartCourses: stte.cartCourses.concat(newCourse), 
            total: state.total+price

        }
     

        default: 
           return state; 
    }

}

export default reducerCart; 