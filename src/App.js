import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayLoader: true
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      let loader = document.getElementById('intialLoader');
      loader.style.display = "none";
      this.setState({ displayLoader: false })
    },1000)

  }
  displayPage() {
    return (
      <div className="App">
          <h1 className='custom-font-color' style={{'padding':'30px'}}>Welcome to Home Page</h1>
          <img src={process.env.PUBLIC_URL + '/car.jpg'}  width='400' height='400' className="circle" alt="car" />
      </div>
    )
  }
  render() {
    return (
      <div>{
        !this.state.displayLoader ? this.displayPage() : null
      }</div>
    );
  }
}

export default App;
