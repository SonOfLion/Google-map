import React, { useEffect, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadMapApi } from "./components/googleApi/utils/GoogleMapsUtils";

import LoginForm from "./components/auth/LoginForm";
import GoogleApi from "./components/googleApi/GoogleApi";
import ErrorPage from "./components/404_page/ErrorPage";

import './App.scss';


function App() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener('load', function () {
      setScriptLoaded(true);
    })
  },[]);

  return (
    <div className="main">
      <BrowserRouter >
        <Switch>
          <Route exact path="/"><LoginForm /></Route>
          {
            scriptLoaded && (
              <Route path="/google-api">
                <GoogleApi mapType={ google.maps.MapTypeId.ROADMAP } mapTypeControl={ true } />
              </Route>
            )
          }
          <Route component={ ErrorPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;