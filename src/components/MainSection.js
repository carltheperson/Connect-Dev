import React from 'react';
import FeturedDevBox from './FeaturedDevBox';

export default function MainSection() {
    return (
        <div id="main-section">
            <h1 id="logo-text">Connect Dev io</h1>
            <p id="explainer-text">Leave your username and connect with a random developer who did the same.</p>
            <FeturedDevBox/>
        </div>
    )
}
