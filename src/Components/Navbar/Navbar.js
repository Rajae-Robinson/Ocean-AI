import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ isSignedIn }) => {
    return (
        (isSignedIn) ?
            <nav className="dt w-100 border-box pa3 ph5-ns shadow-1">
                <Link to="/">
                    <div className="dtc v-mid mid-gray link dim w-25">
                        <img 
                        src={`${process.env.PUBLIC_URL}/logos/logo.png`} 
                        className="dib w2 h2 br-100" 
                        alt="Ocean AI"/>
                        <p id="brand-text" className="dib white">Ocean AI</p>
                    </div>
                </Link>
                <div className="dtc v-mid w-75 tr">
                    <Link to="/">
                    <p className="link dim near-white f6 f5-ns dib mr3 mr4-ns pointer">Logout</p>
                    </Link>
                </div>
            </nav>
        :
        <nav className="dt w-100 border-box pa3 ph5-ns shadow-1">
            <Link to="/">
                <div className="dtc v-mid mid-gray link dim w-25">
                    <img 
                    src={`${process.env.PUBLIC_URL}/logos/logo.png`} 
                    className="dib w3 h3 br-100"
                    alt="Ocean AI"/>
                </div>
            </Link>
            <div className="dtc v-mid w-75 tr">
                <Link to="signup">
                    <p className="link dim near-white f6 f5-ns dib mr3 mr4-ns pointer">Sign up</p>
                </Link>
                <Link to="login">
                    <p className="link dim near-white f6 f5-ns dib mr3 mr4-ns pointer">Login</p>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;