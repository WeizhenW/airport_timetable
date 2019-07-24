import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Home extends Component{
  state = {
    airportList: ['MSP', 'CDG', 'SFO'],
  }

  handleGetFlights = (airport, type) => {
    this.history.push(`/${airport}/${type}`);
  }
  render() {
  return (
    <div className="App">
      <h1>List of Airport</h1>

      <ul>
        {this.state.airportList.map(airport => <li>
          {airport} - 
          <Link to={`/${airport}/departure`}>Departure</Link> -
          <Link to={`/${airport}/arrival`}>Arrival</Link>
          
        </li>)}
      </ul>

      
    </div>
  )
  }
}

export default Home;
