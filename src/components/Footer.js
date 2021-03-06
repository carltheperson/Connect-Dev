import React from 'react';

import githubLogo from "./../styling/res/github_lightyellow.svg";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <footer>
                <p>Check out the Github repository for this project <br/>
                <span className="smaller">(Only front-end for security reasons</span>)</p>
                <img src={githubLogo} alt="Github logo" onClick={()=>window.location.href = "https://github.com/carlriis/Connect-Dev"}/>
                <div className="link-container">
                    <Link to="/">Connect</Link>
                    <Link to="/how-it-works">How it works</Link>
                    <Link to="/about">About</Link>
                </div>
            </footer>
        </div>
    )
}
