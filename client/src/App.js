import React, { Component } from 'react';
import './App.css';
import ImageCard from './Components/ImageCard';
import Header from './Components/header';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: ["Ironman", "SuperMan", "Black panther", "Avengers", "Hulk", "Thor","Ironman", "SuperMan", "Black panther", "Avengers", "Hulk", "Thor"]
    }
  }
  

  render() {
    return (
        <div>
        <Header/>       
          {this.state.movies.map((movie, key) => {
          return (<ImageCard name={movie}/>)
                 })
              }
       </div >
    
    
    );
  }
}

export default App;
