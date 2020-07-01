import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddStudent } from "./components/AddStudent";
import { EditStudent } from "./components/EditStudent";
import { GlobalProvider } from "./context/GlobalState";
import  "./scss/main.scss"

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="dashboard">
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddStudent} />
            <Route path="/edit/:id" component={EditStudent} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
