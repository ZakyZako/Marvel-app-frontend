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
        <div className="flex">
          <div className="firstColumn">
            {" "}
            <Link to={"/personnages"} className="pointeur">
              <button className="button">Characters</button>
            </Link>
            <Link to={"/comics"} className="pointeur">
              <button className="button">Comics</button>
            </Link>
          </div>

          <div className="mid">
            {" "}
            <Link to={"/"} className="pointeur">
              <div>
                <img className="Logo-Marvel" src={Logo} alt="" />
              </div>
            </Link>
          </div>

          <div className="lastColumn">
            <div>
              <Link to={"/favorites"} className="pointeur">
                <button className="button">Favorites</button>
              </Link>
            </div>{" "}
            <div className="connectButton" className="pointeur">
              {props.user === null ? (
                <Link to={"/Log_in"} className="pointeur">
                  <button className="button">Log in</button>
                </Link>
              ) : (
                <button
                  className="button"
                  onClick={() => {
                    Cookies.remove("userToken");
                    Cookies.remove("userId");

                    props.setUser(null);
                    history.push("/");
                  }}
                >
                  Sign out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
