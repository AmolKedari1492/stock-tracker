import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <a className="app__link" href="/" ><h1>Stock Tracker</h1></a>
      </header>
      <section className="app__section">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </section>
      <footer className="app__footer"></footer>
    </div>
  );
}

export default App;
