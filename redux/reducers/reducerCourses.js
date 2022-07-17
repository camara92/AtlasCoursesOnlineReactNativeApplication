import COURSES from '../../data/testData';
import {ADD_TO_CART} from '../constants';
const initialState = {
  existingCourses: COURSES,
};
const reducerCouses = (state = initialState, action) => {
  // switch pour detecter l'action type
  switch (action.type) {
    case ADD_TO_CART:
      const indexCourseToModify = state.existingCourses.findIndex(
        course => course.id === action.course.id,
      );
      const copyexistingCourses = [...state.existingCourses];
      //  modifier
    //   on 
      copyexistingCourses[indexCourseToModify].selected = true;
      return {
        ...state, 
        existingCourses: copyexistingCourses
      }

    default:
      return state;
  }
};

export default reducerCouses;
