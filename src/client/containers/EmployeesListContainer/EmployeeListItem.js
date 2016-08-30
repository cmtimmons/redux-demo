import React, {Component} from 'react';
import  {blue600, orange600, purple600} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  button:{
    textAlign:"left"
  },
  cell:{
    width: "150px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  container:{
    display: "flex",
    alignItems: "center"
  }
}
export default class EmployeeListItem extends React.Component {
  static propTypes = {
    employee: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired
  };
  render(){
    const {id, name, department} = this.props.employee;
    return(
      <div style={styles.container}>
        <div style={styles.cell}>{name}</div>
        <div style={styles.cell}>{department}</div>
        <FlatButton
          label="Delete"
          style={{...styles.button, color:purple600}}
          icon={<i class="material-icons">clear</i>}
          onTouchTap={() =>{this.props.onDelete(id)}}
        />
      </div>
    )
  }
}