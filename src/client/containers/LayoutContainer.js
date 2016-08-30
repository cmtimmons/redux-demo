import React, {PropTypes, Component} from 'react';
import { connect } from "react-redux";
import AppBar from 'material-ui/AppBar';
class Layout extends React.Component {
  constructor(){
    super();
  }
  
  getAppBar = (showAppBar) =>{
    if(showAppBar){
      return(
        <AppBar
          title="Employees Demo"
          showMenuIconButton={true}
        />
      )
    } 
  }
  render() {
    const showAppBar = this.props.auth.fetched;
    return (
      <div style={{height:"100%"}}>
        {this.getAppBar(showAppBar)}
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