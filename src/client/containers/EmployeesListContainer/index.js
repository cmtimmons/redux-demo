import React, {PropTypes, Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import EmployeesList from './EmployeeList';
import  {addEmployee, deleteEmployee, showForm, hideForm} from '../../redux/employees';


const mapStateToProps = (state) => {
  return {
    employees: state.employees.list,
    showForm: state.employees.showForm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _showForm: ()=>{dispatch(showForm())},
    _hideForm: ()=>{dispatch(hideForm())},
    onAddEmployee: (name, department) =>{
      dispatch(addEmployee(name, department))
    },
    _deleteEmployee: (id) =>{
      dispatch(deleteEmployee(id))
    }
  }
}
const EmployeesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList)

export default EmployeesListContainer;