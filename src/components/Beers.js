import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


 class Beers extends Component {

  state = {
    beers: [],
  };


  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        this.setState({ beers: res.data });
      })
      .catch(() => {
        console.log('error, cannot get data from api');
      });
  }
  render() {
    const { beers } = this.state;
    return (
      <div>
        {beers.map((singleBeer, index) => {
          return (
            <div key={index}>
              <Link to={`beers/${singleBeer._id}`}>
                <img className="img" src={singleBeer.image_url} />
              </Link>
              <h6>{singleBeer.name}</h6>
              <h6>{singleBeer.contributed_by}</h6>
              <h6>{singleBeer.tagline}</h6>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Beers;