import React from 'react';
import './Navbar.css';

const Navbar = ({ isSignedIn, onRouteChange }) => {
    return (
        (isSignedIn) ?
            <nav className="dt w-100 border-box pa3 ph5-ns shadow-1">
                <div className="dtc v-mid mid-gray link dim w-25">
                    <img 
                    src={`${process.env.PUBLIC_URL}/logos/logo.png`} 
                    className="dib w2 h2 br-100" 
                    alt="Ocean AI"/>
                    <p id="brand-text" className="dib white">Ocean AI</p>
                </div>
                <div className="dtc v-mid w-75 tr">
                    <p onClick={() => onRouteChange('logout')} className="link dim near-white f6 f5-ns dib mr3 mr4-ns pointer">Logout</p>
                </div>
            </nav>
        :
        <nav className="dt w-100 border-box pa3 ph5-ns shadow-1">
            <div className="dtc v-mid mid-gray link dim w-25">
                <img 
                src={`${process.env.PUBLIC_URL}/logos/logo.png`} 
                className="dib w3 h3 br-100"
                alt="Ocean AI"/>
            </div>
            <div className="dtc v-mid w-75 tr">
                <p onClick={() => onRouteChange('signup')} className="link dim near-white f6 f5-ns dib mr3 mr4-ns pointer">Sign up</p>
                <p onClick={() => onRouteChange('login')} className="link dim near-white f6 f5-ns dib mr3 mr4-ns pointer">Login</p>
            </div>
        </nav>
    );
}

export default Navbar;