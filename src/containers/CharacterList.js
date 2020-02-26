import React, { useState, useEffect } from "react";
import axios from "axios";
import "./characterList.css";
import CharacterTile from "../components/Tile/CharacterTile";

const CharacterList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:81/characters");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="backgroundCharacterList">
      <div className="backgroundCharacterListCenter"></div>
      <div className="inputSearch">
        <input
          type="text"
          value={search}
          onChange={event => {
            setSearch(event.target.value);
          }}
        />

        <button
          onClick={async event => {
            const response = await axios.get(
              `http://localhost:81/characters?search=${search}`
            );
            setData(response.data);
          }}
        >
          Valider
        </button>
      </div>
      <div className="charactersTile">
        {data.map((character, index) => {
          return (
            <CharacterTile
              key={index}
              imgPath={character.imgPath}
              name={character.name}
              desc={character.desc}
              id={character.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
