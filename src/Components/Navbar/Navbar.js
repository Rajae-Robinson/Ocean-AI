import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="dt w-100 border-box pa3 ph5-ns shadow-1">
            <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
                <img 
                src={`${process.env.PUBLIC_URL}/logos/logo.png`} 
                className="dib w2 h2 br-100" 
                alt="Ocean AI"/>
                <p id="brand-text" className="dib white">Ocean AI</p>
            </a>
            <div className="dtc v-mid w-75 tr">
                <a className="link dim near-white f6 f5-ns dib mr3 mr4-ns" href="#" title="Sign up">Sign up</a>
                <a className="link dim near-white f6 f5-ns dib mr3 mr4-ns" href="#" title="Login">Login</a>
            </div>
        </nav>
    );
}

export default Navbar;