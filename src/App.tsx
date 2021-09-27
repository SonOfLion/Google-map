import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginForm from "./components/auth/LoginForm";
import GoogleApi from "./components/googleApi/GoogleApi";
import ErrorPage from "./components/404_page/ErrorPage";

import './App.scss';

function App() {
  return (
    <div className="main">
      <BrowserRouter >
        <Switch>
          <Route exact path="/"><LoginForm /></Route>
          <Route path="/google-api"><GoogleApi /></Route>
          <Route component={ ErrorPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;