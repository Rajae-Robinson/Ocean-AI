import React from 'react';
import { Link } from "react-router-dom";

const Home = ({ loadUser }) => {
    return (
        <header className="hero-bg flex items-center">
            <div className="tc-l ph3">
                <h1 className="f2 f1-l fw2 white-90 ma0 lh-title tc">Welcome to <strong>Ocean AI</strong>. This website uses the 
                    <strong> Clarifai API </strong>to detect faces in images.</h1>
                <h2 className="fw1 f3 white-80 mt3 mb4 tc">Simply search for an image online, 
                    copy the url for the image and finally, paste the link in the input box and press detect!</h2>
                <div id="btn-container">
                    <Link to="/login" className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3">Login to get started!</Link>
                    <span className="dib v-mid ph3 white-70 mb3"></span>
                    <Link to="/signup" className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3">I don't have an account</Link>
                </div>
            </div>
        </header>
    );
}

export default Home;