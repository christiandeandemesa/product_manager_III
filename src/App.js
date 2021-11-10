import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/:id/edit">
            <Update />
          </Route>
          <Route path="/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
