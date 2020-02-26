import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteTile from "../components/Tile/FavoriteTile";

const FavoriteList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:81/favorites");
      setData(response.data);
      setIsLoading(false);
      console.log("favoris");
    };
    fetchData();
  }, []);

  return <div>Envoyer a favorite imgpath id title desc</div>;
};

export default FavoriteList;
