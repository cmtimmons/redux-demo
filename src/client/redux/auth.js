import axios from 'axios';
/** reducer */
const initState = {
  username: null,
  fetching: false,
  fetched: false,
  error: null
}
export default function reducer(state = initState, action){
  switch (action.type){
    case "FETCH_AUTH_USER_PENDING":{
      return {...state, fetching: true};
    }
    case "AUTH_USER_FULFILLED":{
      return {
        ...state,
        fetching: false,
        fetched: true,
        username: action.payload.data.email};
    }
  }
  return state;
}

/** actions */
export const authenticate = (email, password) => {

  return {
    type: 'AUTH_USER',
    payload: axios.post('/api/auth/login', {email, password})
  }
}