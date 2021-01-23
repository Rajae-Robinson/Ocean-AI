import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clarifai from 'clarifai';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import UserProfile from './Components/UserProfile/UserProfile';
import PageNotFound from './Components/PageNotFound/PageNotFound';
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
      route: '/',
      isSignedIn: false,
      box: {},
      user: {
        id: '',
        name: '',
        email: '',
        tries: 10,
        joined: ''
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(console.log)
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

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        tries: data.tries,
        joined: data.joined
      }
    })
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onImageSubmit = () => {
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
        // decreasing tries count
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { tries: count }))
          })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
  }

  render() {
    const { box, imageUrl, route, isSignedIn, user} = this.state
    return (
      <Router>
        <div className="App">
          <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          <Particles
          className="particles" 
          params={particlesOptions} />
          <Switch>
            <Route exact path="/">
              <Home 
              tries={user.tries}
              onInputChange={this.onInputChange}
              onImageSubmit={this.onImageSubmit}
              />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/user/:userId">
              <UserProfile 
              tries={user.tries}
              onInputChange={this.onInputChange}
              onImageSubmit={this.onImageSubmit}
              imageUrl={imageUrl} 
              box={box}
              />
            </Route>
            <Route component={PageNotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

{/* <Navbar isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          <Particles
          className="particles" 
          params={particlesOptions} />
          {
            route === "home" 
            ?
            <div>
              <ImageInput 
              tries={user.tries}
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              />
              <SelectedImage imageUrl={imageUrl} box={box}/>
            </div>
            :
            (
              route === "signup"
              ? <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              :
              <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
          }   */}