import React from "react";
import EmployeesListContainer from "../containers/EmployeesListContainer"
export default class DashboardView extends React.Component {
  render() {
    return (
      <div>
        <EmployeesListContainer/>
      </div>
    );
  }
}