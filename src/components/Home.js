import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <img className="homeImg" src="../assets/beers.png" alt="beersimg"></img>
          <div>
            <Link to="/beers">Beers</Link>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
        </div>

        <div>
          <img src="../assets/random-beer.png" alt="randombeerimg"></img>
          <div>
            <Link to="/random-beer">Random Beers</Link>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
        </div>

        <div>
        <img src="../assets/random-beer.png" alt="beersimg"></img>
        <div>
          <Link to="/new-beer">New Beers</Link>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... </p>
        </div>
      </div>
    );
  }
}
export default Home;
