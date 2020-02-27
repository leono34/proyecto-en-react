import React from "react";
import UserAvatar from 'react-user-avatar'
import {Usuario, Crud, Cards, Imagen} from "./Admin.avatar"
import {MediaCard} from "./Admin.card"
import { Row, Col } from "react-bootstrap";

class Admin extends React.Component {
    constructor(props){
        super(props)
    }
    render()  {
        return (
            <div>
                <div className="d-flex justify-content-around">
                    <Usuario />
                    <Crud />
                </div>
                <Row className=" d-flex justify-content-around py-5 ">
                    <Col>
                      <Imagen />
                    </Col>
                    <Col>
                      <Imagen />
                    </Col>
                    <Col>
                      <Imagen />
                    </Col>
                </Row>

            </div>
        )
    }
}

export {
    Admin
}