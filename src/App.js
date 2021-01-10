import React, { Component } from 'react';
import Clarifai from 'clarifai'
import Navbar from './Components/Navbar/Navbar';
import ImageInput from './Components/ImageInput/ImageInput';
import SelectedImage from './Components/SelectedImage/SelectedImage';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: '15aba1ae988a4020a1999ff88f363a32'
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
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
      // https://www.byrdie.com/thmb/pr2U7ghfvv3Sz8zJCHWFLT2K55E=/735x0/cdn.cliqueinc.com__cache__posts__274058__face-masks-for-pores-274058-1543791152268-main.700x0c-270964ab60624c5ca853057c0c151091-d3174bb99f944fc492f874393002bab7.jpg
      imageUrl: '',
      route: 'home',
      isSignedIn: false,
      box: {}
    }
  }

  onInputChange = (event) => {
    this.setState({imageUrl: event.target.value})
  }

  onRouteChange = (route) => {
    if (route === 'logout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onButtonSubmit = () => {
    app.models
      .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like: `c0c0ac362b03416da06ab3fa36fb58e3`
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
        Clarifai.FACE_DETECT_MODEL,
        this.state.imageUrl)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
  }

  render() {
    const { box, imageUrl, route, isSignedIn} = this.state
    return (
      <div className="App">
        <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <Particles
        className="particles" 
        params={particlesOptions} />
        {
          route === "home" 
          ?
          <div>
            <ImageInput 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            />
            <SelectedImage imageUrl={imageUrl} box={box}/>
          </div>
          :
          (
            route === "signup"
            ? <Signup onRouteChange={this.onRouteChange}/>
            :
            <Login onRouteChange={this.onRouteChange}/>
          )
        }  
      </div>
    );
  }
}

export default App;
