import React from "react";
import "./comicTile.css";

const CharacterTile = props => {
  return (
    <div>
      <div className="comicTile">
        <div>
          <h2>{props.title}</h2>
        </div>
        <div>
          <img src={props.imgPath} alt="logo" />
        </div>
        <div>
          {" "}
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterTile;
