﻿import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Inicial from "./views/Inicial";

import Sugestao from "./views/Sugestao";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Inicial } />
          <Route path = "/sugestao" component = { Sugestao } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
