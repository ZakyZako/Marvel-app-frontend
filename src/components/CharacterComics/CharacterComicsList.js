import React from "react";

const CharacterComicsList = props => {
  return (
    <div>
      <div>
        {props.data.map(comic => {
          return (
            <div>
              <img src={comic.imgPath} alt={comic.title} />
              <div>
                <h3>{comic.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterComicsList;
