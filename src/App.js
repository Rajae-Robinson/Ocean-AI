import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import ImageInput from './Components/ImageInput/ImageInput';
import SelectedImage from './Components/SelectedImage/SelectedImage';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      imageUrl: ' https://www.byrdie.com/thmb/pr2U7ghfvv3Sz8zJCHWFLT2K55E=/735x0/cdn.cliqueinc.com__cache__posts__274058__face-masks-for-pores-274058-1543791152268-main.700x0c-270964ab60624c5ca853057c0c151091-d3174bb99f944fc492f874393002bab7.jpg',
      route: 'face-detector'
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
    this.setState({imageUrl: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Particles
        className="particles" 
        params={particlesOptions} />
        <ImageInput onInputChange={this.onInputChange}/>
        <SelectedImage imageUrl={this.state.imageUrl}/>
        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
