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
render(){
  return(
    <>
    <Name/>
    <Form/>
    ({this.state.location && <currentWeather location = {this.state.location}/>})
    ({this.state.location && <FiveDayForcast location = {this.state.location}/>})
    </>
  )
}
}
export default App;
