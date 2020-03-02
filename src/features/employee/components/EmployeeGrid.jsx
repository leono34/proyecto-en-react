import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import EmployeeCard from "./EmployeeCard";
import { MapExample } from "../../../components"

class inEmployeeGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: []
    }
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/serviciosrest/servicioscliente/')
      .then(({ data }) => {
        this.setState({
          employee: data
        })
      })
  }
  handleClickUser(employee) {
    const { url } = employee;
    const { history, location: { pathname } } = this.props;
    const splitUrl = url.split("/");
    const id = splitUrl[splitUrl.length - 2];

    history.push(`${pathname}/${id}`)
  }
  render() {
    const cards = this.state.employee.map((employee, id) => <EmployeeCard onClick={() => this.handleClickUser(employee)} {...employee} key={id} />)
    return (
      <Fragment>
        <section class="container walker ">
          <div class="row">
            <div class="col  bg-light text-center p-3">
              <h2>Cuidadores de perros cerca de ti</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md col-lg-4 p-3 ">
              <div id="myMap" class="shadow p-3">
                <MapExample />
              </div>
            </div>
            <div id="js_col-user" class="col-users col-md col-lg-8  bg-light mt-3">
              {cards}
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

const EmployeeGrid = withRouter(inEmployeeGrid);
export {
  EmployeeGrid
}
