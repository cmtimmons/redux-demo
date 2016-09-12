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
      hintText: "Create a password"
    },
    {
      name: "confirmPassword",
      type: "password",
      component: TextField,
      hintText: "Confirm your password"
    }
  ],
  buttons: props => {
    let {handleToggleTap} = props;
    return{
      style: {},
      buttons: [
        {
          type: "button",
          label: "Login",
          primary: true,
          raised: false,
          onTouchTap: handleToggleTap
        },
        {
          type: "submit",
          label: "Sign Up",
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
  submit: redirectTo => values => {
    const {email, password} = values;
    return axios.post('/api/auth/signup', { email, password }).then((payload) => {
      return {...payload, redirectTo: redirectTo};
    }).catch(() => {
    throw new SubmissionError({ _error: 'The email is unavailable. Please try again.' })
    })
  },
  validate: values => {
    const errors = {}
    const requiredFields = ['email', 'password', 'confirmPassword']
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (values.password && (values.password != values.confirmPassword)){
      errors.confirmPassword = "These passwords dont match. Try agian?";
    }
    return errors
  }
});