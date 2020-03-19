import React, { useState } from 'react';
import axios from "axios";

import Config from "../Config.js";

import icon from "../styling/res/github.svg";

export default function GithubSection() {

    const [field, setField] = useState();
    const [connectedTo, setConnectedTo] = useState({});


    function updateField(event) {
        setField(event.target.value);
    }

    function connect(event) {
        event.preventDefault();
        axios.post(`http://localhost:${Config.serverPort}/api/connect/github/${field}`)
            .then((response) => {
                setConnectedTo(response.data);
            });
    }

    function getConnectScreen() {
        if (!connectedTo.personConnected || connectedTo.errorMsg) {
        return(
        <form onSubmit={connect}>
            <label htmlFor="github-username-input">
                <h3>Your Github username</h3>
            </label>

            <div>
                <input type="text" name="handle" id="github-username-input" className="section-input" onChange={updateField}/>
            </div>
            <button id="github-btn" className="section-btn">Connect</button>
            <p>{connectedTo.errorMsg ? connectedTo.errorMsg : ""}</p>
        </form>
        );

        } else {

            const goToLink = () => {
                window.open(`https://github.com/${connectedTo.personConnected}`, "__blank");
            }

            return (
                <div className="connected-container github-connected">
                    <div className="connected-screen">
                        <h4 className="connected-text">You connected width</h4>
                        <h4 className="connected-with">{connectedTo.personConnected}</h4>
                        <button className="connected-btn section-btn" onClick={goToLink}>Check them out</button>
                        <p className="connected-explainer">Someone will connect with you shortly</p>
                    </div>
                </div>
            );
        }
    }

    return (
        <div id="github-section" className="section">
           <div className="section-icon-container">
                <img src={icon} alt="" className="section-icon" id="github-icon"/>
            </div>
            <h1>GitHub</h1>
            {getConnectScreen()}
        </div>
    )
}
