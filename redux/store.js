import {createStore, combineReducers} from 'redux'; 
import reducerCouses from './reducers/reducerCourses';

const rootReducer = combineReducers(
    {
        courses: reducerCouses
    }
)
const store = createStore(rootReducer);


export default store; 