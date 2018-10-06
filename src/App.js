import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      displayLoader: true
    }
  }
  componentDidMount(){
    let loader = document.getElementById('intialLoader');
    loader.style.display = "none";
    this.setState({displayLoader:false})

  }
  displayPage(){
    return(
      <div className="App">
      <div className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    </div>
    )
  }
  render() {
    return (

     <div>{
       !this.state.displayLoader ? this.displayPage() :null
           
     }    }</div>

    );
  }
}

export default App;
