import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
  
  this.state = {
    location:''
  }
}
addLocation = (location) =>{
  this.setState({location:location})
}

render(){
  return(
    <>
    <Name/>
    <Form addLocation ={this.addLocation}/>
    ({this.state.location && <CurrentWeather location = {this.state.location}/>})
    ({this.state.location && <FiveDayForcast location = {this.state.location}/>})
    </>
  )
}
}
export default App;
