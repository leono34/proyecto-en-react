import React from "react";
import { withRouter } from "react-router";

class InSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      save: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      history
    } = this.props;

    (sessionStorage.getItem("token")) ? history.push("cliente") : history.replace("login");
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = (target.value === "on") ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // llamada al api, y el api me tiene que retornar el token y tambien el rol
    event.preventDefault();
    // const response = [
    //   {
    //     "id": 1,
    //     "token": "112233$$$",
    //     "usuario": "lucia",
    //     "nombre": "lucia",
    //     "tipo_user": 0
    //   },
    //   {
    //     "id": 2,
    //     "token": "223344$$$",
    //     "usuario": "sandra",
    //     "nombre": "Sandra",
    //     "tipo_user": 0
    //   },
    //   {
    //     "id": 3,
    //     "token": "334455$$$",
    //     "usuario": "sandra",
    //     "nombre": "Juan",
    //     "tipo_user": 0
    //   },
    //   {
    //     "id": 4,
    //     "token": "445566$$$",
    //     "usuario": "sandra",
    //     "nombre": "Antony",
    //     "tipo_user": 0
    //   },
    //   {
    //     "id": 5,
    //     "token": "112233###",
    //     "usuario": "daniel",
    //     "nombre": "daniel",
    //     "tipo_user": 1
    //   },
    //   {
    //     "id": 6,
    //     "token": "223344###",
    //     "usuario": "angelica",
    //     "nombre": "angelica",
    //     "tipo_user": 1
    //   }
    // ];
    let usuario;
    fetch("http://my-json-server.typicode.com/luicsistem/api_usuarios/usuarios")
      .then((response) => {
        return response.json()
      }).then((response) => {
        console.log("response", response)
        usuario = response.filter((usuario) => {
          return usuario.usuario == this.state.username
        })[0];

        // console.log("obj", obj)
        sessionStorage.setItem("usuario", JSON.stringify(usuario))

        const {
          history
        } = this.props;
        console.log("tipouser" ,usuario);
        (usuario.tipo_user == 1) ? history.push("cliente") : history.push("perfil")
      })

    // let obj = {};

    // if (this.state.username == "cliente") {
    //   obj = {
    //     rol: "client"
    //   }
    // } else if (this.state.usermane == "cuidador") {
    //   obj = {
    //     rol: "cuidador"
    //   }
    // }


  }

  render() {
    const {
      username,
      password,
      save
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="sign-in-htm">
        <div className="group">
          <label htmlFor="user" className="label">
            Username
          </label>
          <input
            required
            type="text"
            className="input"
            id="user"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">
            Password
          </label>
          <input
            required
            type="password"
            className="input"
            id="pass"
            datatype="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div className="group">
          <input
            id="check"
            type="checkbox"
            class="check"
            name="save"
            checked={save}
            onChange={this.handleChange}
          />
          <label htmlFor="check">
            <span class="icon"></span> Recordar
          </label>
        </div>
        <div className="group">
          <input type="submit" className="button" value="Sign In" />
        </div>
        <div className="hr"></div>
        <div className="foot-lnk">
          <a href="#forgot">Forgot Password?</a>
        </div>
      </form>
    )
  }
}

const SignIn = withRouter(InSignIn);
export {
  SignIn
}