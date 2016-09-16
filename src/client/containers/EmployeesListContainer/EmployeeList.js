import React, {PropTypes, Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {orange600, purple600} from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddEmployeeForm from './AddEmployeeForm';
import SimpleTable from '../../components/SimpleTable';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  paper: {
    height: "600px",
    overFlow: "scroll",
    width: "460px",
    margin: "0 auto",
    marginTop: "100px"
  },
  action: {
    float: "right",
    position: "relative",
    bottom: "28px",
    right: "15px"
  },
  formContainer: {
    height: "215px",
    paddingLeft: "55px"
  },
  mainContainer: {
    paddingTop: "50px"
  }
}

const rowMapper = onDelete => employee => {
  let {name, department, id} = employee
  return [
    name,
    department,
    <FlatButton
      label="Delete"
      style={{...styles.button, color:purple600}}
      icon = {<i class="material-icons" > clear</i >}
      onTouchTap = {() =>{ onDelete(id) }}
    />
  ]
}

const ActionButton = ({_showForm}) => (
  <FloatingActionButton
    secondary={true}
    onTouchTap={_showForm}
    style={styles.action}>
    <ContentAdd />
  </FloatingActionButton>
)

ActionButton.propTypes = {
  _showForm: React.PropTypes.func.isRequired
}

const ActionForm = ({showForm, _hideForm}) => (
  showForm ? <div style={styles.formContainer}>
    <AddEmployeeForm handleCancelTap={_hideForm}/>
  </div> : <div></div>
)

ActionForm.propTypes = {
  showForm: React.PropTypes.bool.isRequired,
  _hideForm: React.PropTypes.func.isRequired
}

const EmployeesList = ({employees, showForm, _showForm, _hideForm, onAddEmployee, _deleteEmployee}) => (
  <Paper zDepth= {2} style= { styles.paper } >
    <ActionButton _showForm={_showForm}/>
    <div style={styles.mainContainer}>
      <ActionForm showForm={showForm} _hideForm={_hideForm}/>
      <SimpleTable
        headers={["Name", "Department", ""]}
        rows={employees.map(rowMapper(_deleteEmployee))}/>
    </div>
  </Paper>
)

EmployeesList.propTypes = {
  employees: React.PropTypes.array.isRequired,
  showForm: React.PropTypes.bool.isRequired,
  _showForm: React.PropTypes.func.isRequired,
  _hideForm: React.PropTypes.func.isRequired,
  onAddEmployee: React.PropTypes.func.isRequired,
  _deleteEmployee: React.PropTypes.func.isRequired
}

export default EmployeesList;

