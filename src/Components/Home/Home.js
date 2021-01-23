import React from 'react';
import { Link } from "react-router-dom";
import Login from '../Login/Login';

const Home = () => {
    return (
        <div>
            <header className="bg-black sans-serif">
                <div className="cover bg-left bg-center-l">
                    <div className="pb5 pb6-m pb7-l">
                        <div className="tc-l mt4 mt5-m mt6-l ph3">
                            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Welcome to <strong>Ocean AI</strong>. This website uses the 
                                <strong> Clarifai API </strong>to detect faces in images.</h1>
                            <h2 className="fw1 f3 white-80 mt3 mb4">Simply search for an image online, 
                                copy the url for the image and finally, paste the link in the input box and press detect!</h2>
                            <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="#login">Login to get started!</a>
                            <span className="dib v-mid ph3 white-70 mb3"></span>
                            <Link to="/signup" className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3">I don't have an account</Link>
                        </div>
                    </div>
                </div> 
            </header>
            <p className="white">
                <em>
                    A green box will be drawn over the face in the image if there
                    is any.
                </em>
            </p>
            <p className="white">You get 10 free tries daily. Login now to get started!</p>
            <a id="login">
                <Login />
            </a>
        </div>
        // <div className="flex flex-column items-center">
        //     <p className="f3 white">
        //         Welcome to <strong>Ocean AI</strong>. This website uses the 
        //         <strong> Clarifai API </strong>to detect faces in images. Simply follow these steps:
        //     </p>
        //     <ol className="f4 white">
        //         <li>Search for an image online</li>
        //         <li>Copy the url for the image</li>
        //         <li>Paste in the input box and press detect!</li>
        //     </ol>
        //     <p className="white">
        //         <em>
        //             A green box will be drawn over the face in the image if there
        //             is any.
        //         </em>
        //     </p>
        //     <p className="white">You get 10 free tries daily. Login now to get started!</p>
        //     <Login />
        // </div>
    );
}

export default Home;