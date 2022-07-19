import {createStore, combineReducers} from 'redux'; 
import reducerCouses from './reducers/reducerCourses';
import reducerCart from './reducers/reducerCart';
import reducerPayment from './reducers/reducerPayment';

const rootReducer = combineReducers(
    {
        courses: reducerCouses, 
        cart: reducerCart, 
        payments: reducerPayment
    }
)
const store = createStore(rootReducer);


export default store; 