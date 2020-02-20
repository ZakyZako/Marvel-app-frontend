import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CharacterComicsList from "../components/CharacterComics/CharacterComicsList";

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
        <div>
          <div>{data.name}</div>
          <div>
            <img src={data.imgPath} alt="img hero" />
          </div>
          <div>
            <div>
              <p>{data.desc}</p>
              <div>
                <CharacterComicsList data={data.comics} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
