const initState = {
  showForm: false,
  list: [
    {
      id: 123456,
      department: "Computer Science",
      name: "April"
    },
    {
      id: 1234567,
      department: "History",
      name: "Michael"
    }
  ]
}
export default function reducer(state = initState, action){
  switch (action.type){
    case "SHOW_FORM":{
      let showForm = true;
      return {...state, showForm}
    }
    case "HIDE_FORM":{
      let showForm = false;
      return {...state, showForm}
    }
    case "ADD_EMPLOYEE":{
      const list = [...state.list, {...action.payload}];
      return {...state, list};
    }
    case "DELETE_EMPLOYEE":{
      const index = state.list.findIndex((employee)=> employee.id == action.payload.id);
      return{
        ...state,
        list:[
          ...state.list.slice(0, index),
          ...state.list.slice(index + 1)
        ]
      }
    }
  }
  return state;
}
export const addEmployee = (name, department) =>{
  const id = Date.now()
  return{
    type: "ADD_EMPLOYEE",
    payload: {
      id,
      name,
      department
    }
  }
}
export const deleteEmployee = (id) => {
  return{
    type: "DELETE_EMPLOYEE",
    payload: {
      id
    }
  }
}
export const showForm = () => {
  return{
    type: "SHOW_FORM"
  }
}
export const hideForm = () => {
  return{
    type: "HIDE_FORM"
  }
}