import { ADD_DATA, USER_DATA } from "../constants";


export function changeUserData(data) {
  return {
    type: USER_DATA,
    payload: data
  };
}
export function insertNotes(data) {
  return {
    type: ADD_DATA,
    payload: data
  };
}


