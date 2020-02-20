import React from "react";
import { Link } from "react-router-dom";
import "./characterTile.css";

const CharacterTile = props => {
  return (
    <div>
      <Link
        className="pointeur"
        to={"/personnage/" + props.id}
        style={{ textDecoration: "none" }}
      >
        <div className="characterTile">
          <div>
            <h4>{props.name}</h4>
          </div>
          <div>
            <img src={props.imgPath} alt="imgThor" />
          </div>
          <div>
            {" "}
            <p>{props.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharacterTile;
