import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className="sideBar">
        <img src={Logo} alt="everis" />
      </section>
      <section className="contLogin">
        <div className="">Inicia sesión mediante tu cuenta corporativa</div>
        <div className="login">
          Nombre de usuario
          <input type="text" className="loginInput" placeholder="Ej: Usuario" />
          Contraseña
          <input type="password" className="loginInput" placeholder="******" />
          ¿Olvidaste tu cotraseña?
          <Link to="/booking" className="btnLogin">Iniciar Sesión</Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
