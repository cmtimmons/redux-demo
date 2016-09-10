import React, {PropTypes, Component} from 'react';
import { connect } from "react-redux";
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { push } from 'redux-router';
import { bindActionCreators } from 'redux';
import LoginForm from './LoginForm';
const styles = {
  container : {
    display: "flex",
    flexDirection: "column",
    marginLeft: "72px"
  },
  paper:{
    width: "400px",
    height: "400px",
    margin: "0 auto"
  },
  title:{
    fontSize: "xx-large",
    marginTop: "72px"
  },
  outerContainer:{
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItem:"center",
    height:"100%"
  },
  mainTitle:{
    fontSize: "300%",
    color: 'white',
    margin: '0 auto',
    marginBottom: "72px"
  }
}
class Login extends Component {
  constructor(props){
    super(props);
    const redirectRoute = this.props.location.query.next || '/';
    this.state = {
      redirectTo: redirectRoute 
    }
  }
  static propTypes = {
    location: React.PropTypes.object.isRequired,
    auth: React.PropTypes.object.isRequired,
    push: React.PropTypes.func.isRequired
  }
  render() {
    const {primary1Color} = this.context.muiTheme.palette;
    return (
      <div style={{...styles.outerContainer, backgroundColor:primary1Color}}>
        <div style={{...styles.mainTitle}}>Redux Demo</div>
        <Paper  style={styles.paper} zDepth={1} >
          <div style={styles.container}>
            <div style={{...styles.title, color:primary1Color}}>
              Login
            </div>
            <LoginForm redirectTo={this.state.redirectTo}/>
          </div>
        </Paper>
      </div>
    );
  }
}
Login.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: bindActionCreators(push, dispatch)
  }
}
const LoginView = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginView;
