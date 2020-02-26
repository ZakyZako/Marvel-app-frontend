import React, { useState } from "react";
import Home from "./containers/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./containers/Login";
import CharacterList from "./containers/CharacterList";
import Header from "./components/Header/Header";
import ComicsList from "./containers/ComicsList";
import FavoriteList from "./containers/FavoriteList";
import CharacterPage from "./containers/CharacterPage";
import SignUp from "./containers/SignUp";

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }

  const [user, setUser] = useState(newState);
  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Switch>
        <Route path={"/log_in"}>
          <Login setUser={setUser} />
        </Route>
        <Route path={"/sign_up"}>
          <SignUp user={user} setUser={setUser} />
        </Route>
        <Route path={"/personnage/:id"}>
          <CharacterPage />
        </Route>
        <Route path={"/personnages"}>
          <CharacterList />
        </Route>
        <Route path={"/comics"}>
          <ComicsList />
        </Route>
        <Route path={"/favorites"}>
          <FavoriteList />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
