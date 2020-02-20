import React, { useState, useEffect } from "react";
import axios from "axios";
import ComicTile from "../components/Tile/ComicTile";
import "./comicsList.css";
const ComicsList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:81/comics");
      console.log("toto");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="backgroundComicList">
      <div className="backgroundComicsListCenter">
        <div className="inputSearch">
          <input
            type="text"
            value={search}
            onChange={event => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <button
          onClick={async event => {
            const response = await axios.get(
              `http://localhost:81/comics?search=${search}`
            );
            setData(response.data);
          }}
        >
          Rechercher
        </button>
      </div>
      <div className="comicsTile">
        {data.map((comic, index) => {
          return (
            <ComicTile
              key={index}
              imgPath={comic.imgPath}
              title={comic.title}
              desc={comic.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ComicsList;
