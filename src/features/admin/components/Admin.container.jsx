import React from "react";
import UserAvatar from 'react-user-avatar'
import {Usuario, Crud, Cards, Imagen} from "./Admin.avatar"
import {MediaCard, Avatar} from "./Admin.card"
import { Row, Col } from "react-bootstrap";

class Admin extends React.Component {
    constructor(props){
        super(props)
    }
    render()  {
        return (
            <div>
                <div className="d-flex justify-content-around">
                    <div>
                    <Avatar url="https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg" alt="perro"/>
                    </div>
                    <Usuario name="Jorge" />
                    <Crud avat="Jorge Minaya" />
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