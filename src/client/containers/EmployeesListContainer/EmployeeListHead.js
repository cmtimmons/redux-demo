import React, {Component} from 'react';
const styles = {
  cell:{
    width: "150px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  container:{
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.298039)",
    marginTop: "15px"
  }
}
export default class EmployeeListHead extends React.Component {
  render(){
    return(
      <div style={styles.container}>
        <div style={styles.cell}>Name</div>
        <div style={styles.cell}>Department</div>
      </div>
    )
  }
}