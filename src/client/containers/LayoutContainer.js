import React, {PropTypes, Component} from 'react';
import { connect } from "react-redux";
import AppBar from 'material-ui/AppBar';
class Layout extends React.Component {
  
  static propTypes = {
    children: React.PropTypes.node
  }
  render() {
    const showAppBar = this.props.auth.loggedIn;
    return (
      <div style={{height:"100%"}}>
        {showAppBar && <AppBar
          title="Employees Demo"
          showMenuIconButton={true}
        />}
        {this.props.children}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

export default LayoutContainer;