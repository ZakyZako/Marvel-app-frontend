import React, { useState, useEffect } from "react";
import axios from "axios";

const FavoriteList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:81/favoris");
      setData(response.data);
      setIsLoading(false);
      console.log("favoris");
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>FAVORITE PAGE</h2>
    </div>
  );
};

export default FavoriteList;
