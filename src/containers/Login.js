import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./login.css";
import { Link } from "react-router-dom";
import "./login.css";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogIn = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:81/user/log_in", //todo
        { email, password }
      );

      if (response.data.token !== undefined) {
        const token = response.data.token;
        const id = response.data._id;
        console.log("idddddD", id);
        Cookies.set("userId", id);
        Cookies.set("userToken", token, { expires: 10 });
        console.log("token", token);
        props.setUser({ token: token });
        history.push("/");
      } else {
        alert("Token is missing");
      }
    } catch (error) {
      alert("Idientifiants incorrects");
    }
  };

  return (
    <div className="formCenter">
      <div className="containerEnTete">
        <div className="enTete">EN TETE</div>
        <div className="spanLogin">
          <span>JOINS US!</span>
        </div>
        <div className="enTable">BONJOUR</div>
      </div>

      <div className="LoginForm">
        <form
          className="form"
          onSubmit={event => {
            handleLogIn(event);
          }}
        >
          <div className="h2">
            <h2>Connexion</h2>
          </div>
          <h4 className="LoginMail">Adresse email</h4>
          <input
            className="inputForm"
            type="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
          <h4 className="LoginPassword">Password</h4>
          <input
            className="inputForm"
            type="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <div className="containerbtnform">
            {/* <Link to={"/"}> */}
            <button className="Formbtnconnect" type="submit">
              Se connecter
            </button>
            {/* </Link> */}
          </div>
        </form>

        <div className="FooterForm">
          <span>Vous n'avez pas de compte ?</span>
          <Link to={"/sign_up"}>
            <button>Créer un compte </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
