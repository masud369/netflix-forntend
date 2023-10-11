import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Netflex from './Pages/Netflex';
import Player from "./Pages/Player";
import Movies from "./Pages/Movies";
import TVshows from "./Pages/TVshows";
import MyList from "./Components/MyList";
import ItemList from "./Components/ItemList";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" exact element={<Login/>} />
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/player" exact element={<Player/>} />
          <Route path="/movie" exact element={<Movies/>} />
          <Route path="/tv" exact element={<TVshows/>} />
          <Route path="/mylist" exact element={<MyList/>} />
          <Route path="/card" exact element={<ItemList />} />
          <Route path="/" exact element={<Netflex/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
