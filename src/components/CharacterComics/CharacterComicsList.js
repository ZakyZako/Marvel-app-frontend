import React from "react";
import "./CharacterComics.css";
const CharacterComicsList = props => {
  return (
    <div>
      <div className="box">
        <div className="titleContainerComics">
          {" "}
          <h2>Come see your hero's comics !</h2>{" "}
        </div>
        <div className="comicsCharacter">
          {props.data.map(comic => {
            console.log("je suis comicdata", comic);
            return (
              <div>
                <div className="containerComics">
                  <div className="comicsTitle">
                    {" "}
                    <h3>{comic.title}</h3>
                  </div>

                  <div className="comicsCharacterImg">
                    <img src={comic.imgPath} alt={comic.title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterComicsList;
