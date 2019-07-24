import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';
import TimeTable from '../TimeTable/TimeTable'
import {HashRouter as Router, Route, Link} from 'react-router-dom';
class App extends Component{


  render() {
  return (
    <div className="App">      

      <Router>
          <Route path='/' exact component={Home}/>
          <Route path='/:airport/:type' component={TimeTable}/>

      </Router>
      
    </div>
  )
  }
}

export default App;
