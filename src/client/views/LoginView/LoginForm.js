import React, {PropTypes, Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { SubmissionError } from 'redux-form'
import { userLoggedIn } from "../../redux/auth";
import { push } from 'redux-router';
import axios from 'axios';
import { TextField } from 'redux-form-material-ui';

const styles = {
  field: {
    marginTop: "10px",
    marginBottom: "10px"
  },
  error: {
    color: "red"
  }
}

const validate = values => {
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

const onSubmitSuccess = (result, dispatch) =>{
  const {email, _id} = result.data;
  dispatch(userLoggedIn(email, _id));
  dispatch(push('/'))
}
class LoginForm extends Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func.isRequired,
    error: React.PropTypes.object.isRequired,
    redirectTo: React.PropTypes.string.isRequired
  }

  submit(values) {
    const {email, password} = values;
    return axios.post('/api/auth/login', { email, password }).then((payload) => {
      return {...payload, redirectTo: this.props.redirectTo};
    }).catch(() => {
      throw new SubmissionError({ _error: 'Invalid email or password' })
    });
  }

  render() {
    const {error, handleSubmit} = this.props;
    const {primary1Color, alternateTextColor} = this.context.muiTheme.palette;
    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Field style={styles.field}
          name="email"
          component={TextField}
          hintText="Email"/>
        <Field style={styles.field}
          name="password"
          type="password"
          component={TextField}
          hintText="Password"/>
        <div style={styles.error}>{error && <strong>{error}</strong>}</div>
        <RaisedButton type="submit" primary={true} backgroundColor={primary1Color}label="Login"/>
      </form>
    );
  }
}

LoginForm.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

const WrappedLoginForm = reduxForm({
  form: 'loginForm',
  onSubmitSuccess,
  validate
})(LoginForm);

export default WrappedLoginForm;