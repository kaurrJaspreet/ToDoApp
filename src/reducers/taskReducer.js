import { act } from "react-test-renderer";
import { ADD_DATA, USER_DATA } from "../constants";


const initialState = {
  data: [],

};

const taskReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        data: action.payload
      };
    case ADD_DATA:
      return {
        ...state,
        // data: [...action.payload, ...state]
        data:  [...state.data, action.payload]
      };
    default:
      return state;
  }
};
export default taskReducer;
