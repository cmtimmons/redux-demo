import React from 'react';
import { SubmissionError } from 'redux-form'
import { userLoggedIn } from "../../redux/auth";
import { push } from 'redux-router';
import axios from 'axios';
import { TextField } from 'redux-form-material-ui';
import createFormClass from '../../components/FormClassFactory'

export default createFormClass({
  name: "login",
  fields: [
    {
      name: "email",
      component: TextField,
      hintText: "Email"
    },
    {
      name: "password",
      type: "password",
      component: TextField,
      hintText: "Password"
    }
  ],
  buttons: props =>{
    let {handleToggleTap} = props;
    return {
      style: {},
      buttons: [
        {
          type: "button",
          label: "Sign Up",
          primary: true,
          raised: false,
          onTouchTap: handleToggleTap
        },
        {
          type: "submit",
          label: "Login",
          primary: true,
          raised: true
        }
    ]
  }
},
  onSubmitSuccess: (result, dispatch) => {
    const {redirectTo} = result;
    const {email, _id} = result.data;
    dispatch(userLoggedIn(email, _id));
    dispatch(push(redirectTo))
  },
  submit: props => values => {
    let {redirectTo} = props;
    let {email, password} = values;
    return axios.post('/api/auth/login', { email, password }).then((payload) => {
      return {...payload, redirectTo: redirectTo};
    }).catch(() => {
    throw new SubmissionError({ _error: 'Invalid email or password' })
    })
  },
  validate: values => {
    const errors = {}
    const requiredFields = ['email', 'password']
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }
});