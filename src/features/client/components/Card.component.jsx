import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Formascota } from './Formulario.component';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <section>
        <Button type="button" value="Open" onClick={() => this.openModal()} >Añadir mascota</Button>
        <Modal
          visible={this.state.visible}
          width="70%"
          height="560"

          effect="fadeInUp"
          onClickAway={() => this.closeModal()}>
          <div>
            <Formascota />
            <Button href="javascript:void(0);" onClick={() => this.closeModal()}>Close</Button>
          </div>
        </Modal>
      </section>
    );
  }
}

class Dueñocard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card border="info" style={{ width: '25rem', height: '25rem', border: '2px solid' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title><h3>{this.props.mascotita.nom_due}</h3>  </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> <h6> {this.props.mascotita.nom_masc}</h6></Card.Subtitle>
            <Card.Text>
              <p>{this.props.mascotita.description} </p>
            </Card.Text>
            <Card.Link href="#"><Button variant="info">Card Link</Button></Card.Link>
            <Card.Link href="#"><Button variant="success">Another Link</Button></Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export {
  Dueñocard
}
