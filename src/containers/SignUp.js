import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import Cookies from "js-cookie";

const SignUp = props => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [errorMessage, setErrorMessage] = useState("test error message");
  const history = useHistory();

  const postUser = () => {
    const User = axios
      .post("http://localhost:81/user/sign_up", {
        email: email,
        username: username,
        password: password
      })
      .then(data => {
        if (data.data.message === "Missing parameter")
          setErrorMessage("Tu fais quoi la ?");
        else {
          console.log(data);
          return data.data;
        }
      });
    return User;
  };

  const inscription = async event => {
    event.preventDefault();
    if (password !== passwordTwo) {
      return alert("Nul pas bon ");
    } else {
      try {
        const newUser = await postUser();
        const userToken = newUser.token;
        Cookies.set("userToken", userToken, { expires: 10 });
        props.setUser({ token: userToken });
        history.push("/");
      } catch (error) {
        console.log("errrrrror");
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={event => {
          inscription(event);
        }}
      >
        <div className="formCenter">
          <div>
            <h2>Créer un compte</h2>
          </div>
          <div>
            <span>{errorMessage}</span>
            <h3>Username</h3>
            <input
              type="text"
              value={username}
              onChange={event => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>Adresse email*</h3>
            <input
              type="email"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>Mot de passe*</h3>
            <input
              type="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
            <h3>Confirmer le mot de passe*</h3>
            <input
              type="password"
              value={passwordTwo}
              onChange={event => {
                setPasswordTwo(event.target.value);
              }}
            />
          </div>
          <button>Créer mon Compte Personnel</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
