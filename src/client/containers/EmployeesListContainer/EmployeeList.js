import React, {PropTypes, Component} from 'react';
import EmployeeListItem from './EmployeeListItem';
import EmployeeListHead from './EmployeeListHead';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import  {orange600} from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add';
const styles = {
  paper: {
    height: "600px",
    overFlow: "scroll",
    width: "460px",
    margin: "0 auto",
    marginTop: "100px"
  },
  table:{
    
  },
  textFields:{
    marginLeft: "10px"
  },
  action:{
    float: "right",
    position: "relative",
    bottom: "28px",
    right: "15px"
  }
}
export default class EmployeesList extends React.Component {
  constructor(){
    super()
    this.state = {
      nameVal: "",
      departmentVal: ""
    }
    this._handleNameChange = this._handleNameChange.bind(this);
    this._handleDepartmentChange = this._handleDepartmentChange.bind(this);
    this._handleActionTap = this._handleActionTap.bind(this);
  }
  static propTypes = {
    employees: React.PropTypes.array.isRequired,
    onAddEmployee: React.PropTypes.func.isRequired,
    _deleteEmployee: React.PropTypes.func.isRequired
  }
  _handleNameChange(e) {
    this.setState({
      nameVal: e.target.value
    });
  }
  _handleDepartmentChange(e) {
    this.setState({
      departmentVal: e.target.value
    });
  }
  _handleActionTap(){
    this.props.onAddEmployee(this.state.nameVal, this.state.departmentVal);
  }
  render(){
    const {employees} = this.props;
    const employeesList = employees.map((employee) => {
        return (
            <EmployeeListItem 
                key={employee.id} 
                employee={employee}
                onDelete={this.props._deleteEmployee}/>
        )
    });
    const {nameVal, departmentVal} = this.state;
      return(
        <Paper zDepth={2} style={styles.paper}>
          <FloatingActionButton secondary={true} onTouchTap={this._handleActionTap}style={styles.action}>
            <ContentAdd />
          </FloatingActionButton>
          <div style={styles.textFields}>
            <TextField
              floatingLabelText="Name"
              value={nameVal}
              onChange={this._handleNameChange}
            />
            <TextField
              floatingLabelText="Department"
              value={departmentVal}
              onChange={this._handleDepartmentChange}
            />
          </div>
          <div style={styles.table}>
            <EmployeeListHead/>
            <div>{employeesList}</div>
          </div>
        </Paper>
      )
  }
}