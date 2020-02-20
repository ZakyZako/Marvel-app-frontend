import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Cookies from "js-cookie";
import Logo from "../../images/Marvel-Logo.png";

const Header = props => {
  const history = useHistory();

  return (
    <div>
      <div className="Header">
        <Link to={"/"} className="pointeur">
          <div>
            <img className="Logo-Marvel" src={Logo} alt="" />
          </div>
        </Link>
        <div className="flex">
          <Link to={"/personnages"} className="pointeur">
            <button className="button">Personnage</button>
          </Link>
          <Link to={"/comics"} className="pointeur">
            <button className="button">Comics</button>
          </Link>
          <Link to={"/favoris"} className="pointeur">
            <button className="button">Favoris</button>
          </Link>

          <div className="connectButton" className="pointeur">
            {props.user === null ? (
              <Link to={"/Log_in"} className="pointeur">
                <button className="button">Se connecter</button>
              </Link>
            ) : (
              <button
                className="button"
                onClick={() => {
                  Cookies.remove("userToken");

                  props.setUser(null);
                  history.push("/");
                }}
              >
                Se déconnecter
              </button>
            )}
          </div>
        </div>
        <Link to={"/"} className="pointeur">
          <div>
            <img className="Logo-Marvel" src={Logo} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
