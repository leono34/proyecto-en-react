import React from "react";
import {Employees} from "../../"
class Client extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>Mapa</div>
        <Employees/>
      </div>
    )
  }
}

export {
  Client
}