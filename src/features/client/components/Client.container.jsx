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
       
        <h1>aki construire mi mapita</h1>
         {/* <Employees/>  */}
         <EmployeeGrid/>  
        
        
      </div>
    )
  }
}

export {
  Client
}