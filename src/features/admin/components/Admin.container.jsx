import React from "react";
import {Crud, Imagen} from "./Admin.avatar"
import {Avatar} from "./Admin.card"
import { Row, Col } from "react-bootstrap";

class Admin extends React.Component {
    constructor(props){
        super(props)
    }
    render()  {
        return (
            <div>
                <Row className="d-flex justify-content-around">
                    <Avatar nombre="Jorge" url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfArWrKYvA1ZoH3xIbo5dxDuqPu2ybUnxbpd7PxsbcC4zVcx4c" />
                    <Crud />
                </Row>
                <Row className=" d-flex justify-content-around py-5 ">
                    <Col>
                      <Imagen titulo="Gráfico Ventas" src="https://image.freepik.com/psd-gratis/ventas-plantilla-diseno-grafico_348-292935650.jpg"/>
                    </Col>
                    <Col>
                      <Imagen titulo="Gráfico Ganancias" src="https://support.content.office.net/es-es/media/442d0e69-6716-420c-a8a9-75f580a5a5d7.png"/>
                    </Col>
                    <Col>
                      <Imagen titulo="Gráfico Balance" src="https://www.diccionariomedioambiente.org/DiccionarioMedioAmbiente/uploaded/images/Balance_hidrico_grafico.jpg" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export {
    Admin
}