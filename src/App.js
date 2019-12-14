import React, {Component} from 'react';
import './App.scss';
import NavBar from './Components/NavBar/navBar';
import TourList from './Components/TourList';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <TourList />
    </div>
    ) ;
    
    
  }
}

export default App;
