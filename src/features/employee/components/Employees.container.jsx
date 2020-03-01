import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";

import { withRouter } from 'react-router-dom';

class EmployeesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    }

    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    // fetch
    this.setState({
      employees : [
        {
          id: 1,
          name: "sebastian"
        },
        {
          id: 2,
          name: "jose"
        },
        {
          id: 3,
          name: "armando"
        }
      ]
    })
  }

  handleClick(employee) {
    this.props.history.push(`/employee/${employee.id}`)
  }

  render() {
  const employees = this.state.employees.map((employee) => <h1 key={employee.id} onClick={() => this.handleClick(employee)}>{employee.name}</h1>)
    return (
      <div>
        {employees}
      </div>
    )
  }
}

const  Employees = withRouter(EmployeesContainer);

export {
  Employees
}