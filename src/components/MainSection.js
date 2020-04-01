import React from 'react';
import FeturedDevBox from './FeaturedDevBox';

export default function MainSection() {
    return (
        <div id="main-section">
            <h1 className="title">Connect</h1>
            <p className="explainer-text">Leave your username and connect with a random developer who did the same.</p>
            <FeturedDevBox/>
        </div>
    )
}
