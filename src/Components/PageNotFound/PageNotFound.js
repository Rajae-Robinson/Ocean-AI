import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <section class="vh-100 hero-bg">
            <header class="tc ph5 lh-copy">
                <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight dark-red">404</h1>
                <h2 class="tc near-white f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
            </header>
            <p class="fw1 i tc mt4 mt5-l white f4 f3-l">Are you looking for one of these?</p>
            <ul class="list tc pl0 w-100 mt5">
                <li class="dib"><a class="f5 f4-ns link white db pv2 ph3 hover-dark-blue" href="/">Home</a></li>
                <li class="dib"><a class="f5 f4-ns link white db pv2 ph3 hover-dark-blue" href="/login">Login</a></li>
                <li class="dib"><a class="f5 f4-ns link white db pv2 ph3 hover-dark-blue" href="/signup">Signup</a></li>
            </ul>
        </section>
    );
}

export default PageNotFound;