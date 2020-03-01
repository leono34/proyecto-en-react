import React, {Component} from "react";
// import {Employees} from "../../";
import {EmployeeGrid} from "../../";

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
         <EmployeeGrid/>  
        
        
      </div>
    )
  }
}

export {
  Client
}