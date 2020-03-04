import React from "react";


class EmployeesDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("props", this.props)
  }

  
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        EmployeesDetail {this.props.match.params.id}
      </div>
    )
  }
}

export {
  EmployeesDetail
}