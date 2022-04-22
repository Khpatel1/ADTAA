//what do i need as far as course reducer functions??
import {
  CREATE_COURSE_FAIL,
  CREATE_COURSE_SUCCESS,
  GET_COURSE,
  COURSE_DELETED,
  COURSE_ERROR,
  REMOVE_ALERT,
  SET_ALERT,
} from '../actions/types';

// we'll store an array of objects with an id, message, and alertType that communicates a success/failed login
const initialState = {
  course: [],
  loading: true,
  error: {},
};

function courseReducer(state = initialState, action) {
  const { type, payload } = action; //destructuring the action variables

  switch (type) {
    case GET_COURSE: //this is adding an alert to an array
      return {
        ...state,
        course: payload,
        loading: false,
      };
    case CREATE_COURSE_SUCCESS: //this is adding an alert to an array
      return {
        ...state,
        course: payload,
        loading: false,
      };
    case COURSE_DELETED: //we're removing an alert by its id
      return {
        ...state,
        course: payload,
      };
    case CREATE_COURSE_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default courseReducer;
