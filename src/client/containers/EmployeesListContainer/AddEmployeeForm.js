import React from 'react';
import { SubmissionError } from 'redux-form'
import { addEmployee, deleteEmployee, showForm, hideForm} from "../../redux/employees";
import { push } from 'redux-router';
import axios from 'axios';
import { TextField } from 'redux-form-material-ui';
import createFormClass from '../../components/FormClassFactory'

export default createFormClass({
  name: "login",
  fields: [
    {
      name: "name",
      component: TextField,
      hintText: "Name"
    },
    {
      name: "department",
      component: TextField,
      hintText: "Department"
    }
  ],
  buttons: props => {
    let {handleCancelTap} = props;
    return {
      style: {},
      buttons: [
        {
          type: "button",
          label: "Cancel",
          primary: true,
          raised: false,
          onTouchTap: handleCancelTap
        },
        {
          type: "submit",
          label: "Add",
          primary: true,
          raised: true
        }
      ]
    }
  },
  onSubmitSuccess: (result, dispatch) => {
    const {name, department} = result;
    dispatch(addEmployee(name, department));
  },
  submit: props => values => {
    return values;
  },
  validate: values => {
    const errors = {}
    const requiredFields = ['name', 'department']
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    });
    return errors
  }
});