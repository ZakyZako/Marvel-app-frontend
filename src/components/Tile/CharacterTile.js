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
          <div className="characterImg">
            <img src={props.imgPath} alt="imgThor" />
          </div>
          <div className="characterName">
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharacterTile;
