import React from "react";

function Header(props) {
  return (
    <header>
        <a href="#" className="logo">Logo</a>
        <div className="menu-toggle"></div>
          <nav>
            <ul>
              <li><a href="#" className="active" >Inicio</a></li>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Paseadores</a></li>
              <li><a href="#">Registrate</a></li>
            </ul>
          </nav>
          <div className="main" ></div>
    </header> 
  )
}

export {
  Header
}