import React, { Component } from "react";
import { EmployeeGrid } from "../../";
class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <div>
        {/* <Employees/>  */}
        <EmployeeGrid />
      </div>
    )
  }
}

export {
  Client
}