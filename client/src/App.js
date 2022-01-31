import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/products'>
          <Main />
        </Route>
        <Route exact path='/products/:id'>
          <Detail />
        </Route>
        <Route exact path='/products/:id/edit'>
          <Update />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
