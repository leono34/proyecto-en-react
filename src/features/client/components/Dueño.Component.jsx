import React from "react";


class Invita extends React.Component {
    render() {
      return (
        <div className="card-invitacion">
            <h5>{this.props.text}</h5>
            <p>{this.props.text1}</p>
        </div>
      );
    }
  }
  
  export { Invita };

class Parrafo extends React.Component{
  render(){
    return <p className="span">{this.props.text}</p>;
  }
}

  export{ Parrafo }

  class Label extends React.Component{
    render(){
      return <label for="comment">{this.props.text}</label>;
    }
  }
  export{Label}