import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CharacterComicsList from "../components/CharacterComics/CharacterComicsList";
import "./characterPage.css";

const CharacterPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:81/character/" + id);

      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading === true ? (
        <p> En cours de chargement</p>
      ) : (
        <div className="containerCharacterPage">
          <div>
            <div className="imgDescCharacterPage">
              <img src={data.imgPath} alt="img hero" />
              <div className="containerNameDesc">
                {" "}
                <div className="nameCharacterPage">{data.name}</div>
                <div className="containerDesc">
                  <p>{data.desc}</p>
                </div>
              </div>
            </div>
            <div>
              <CharacterComicsList data={data.comics} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
