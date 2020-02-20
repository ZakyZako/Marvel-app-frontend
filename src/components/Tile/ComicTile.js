import React from "react";
import "./comicTile.css";

const CharacterTile = props => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div>
        <img src={props.imgPath} alt="logo" />
      </div>
    </div>
  );
};

export default CharacterTile;
