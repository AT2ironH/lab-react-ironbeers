import './App.css';
import Home from './components/Home';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';
import Header from './components/Header';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';


 class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
              return <Home/>;
            }}
          />
          <Route path="/beers" render={() => {
              return <Beers/>;
            }}
          />
          <Route path="/randombeers" render={() => {
              return <RandomBeer/>;
            }}
          />
          <Route path="/beers" render={() => {
              return <NewBeer/>;
            }}
          />
          <Route path="/beers/:singleBeer._id" render={() => {
              return <SingleBeer />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default App;