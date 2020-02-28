import React, { Component } from 'react';
import EmployeeCard from "./EmployeeCard";
import axios from 'axios';


class EmployeeGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: []
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/luicsistem/json-db/paseadores')
      .then(resp => {
        this.setState({
          employee: resp.data
        })
      })
  }

  render() {
    console.log("employee", this.state.employee)
    const cards = this.state.employee.map((employee, id) => <EmployeeCard {...employee} key={id} />)
    return (
      <div>
        { cards }
      </div>
    )
  }
}

export {
  EmployeeGrid
}
