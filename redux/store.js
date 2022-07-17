import {createStore, combineReducers} from 'redux'; 
import reducerCouses from './reducers/reducerCourses';
import reducerCart from './reducers/reducerCart';


const rootReducer = combineReducers(
    {
        courses: reducerCouses, 
        cart: reducerCart
    }
)
const store = createStore(rootReducer);


export default store; 