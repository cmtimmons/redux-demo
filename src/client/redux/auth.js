import axios from 'axios';
/** reducer */
const initState = {
  id: null,
  email: null,
  loggedIn: false
}
export default function reducer(state = initState, action){
  switch (action.type){
    case "USER_LOGGED_IN":{
      return {...state, id: action.payload.id, email: action.payload.email, loggedIn: true};
    }
  }
  return state;
}

/** actions */
export const userLoggedIn = (email, id) => {
  return{
    type: "USER_LOGGED_IN",
    payload: {
      email,
      id
    }
  }
}