import React from 'react';
import { withRouter, Link } from "react-router-dom";
import './Navbar.css';
import auth from '../../auth'

const Navbar = (props) => {
    return (
        (auth.isAuthenticated()) ?
            // User signed in so only logout should show
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
                    <button 
                    onClick={() => {
                        auth.logout(() => {
                            props.history.push("/")
                        })
                    }}
                    style={{backgroundColor: "transparent", border: "0"}}
                    className="link dim near-white f6 f5-ns dib mr3 mr4-ns pointer">
                        Logout
                    </button>
                </div>
            </nav>
        :
        // User logged out so show signup and login options
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

export default withRouter(Navbar);