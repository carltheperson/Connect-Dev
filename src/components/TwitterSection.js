import React, { useState } from 'react';
import axios from "axios";

import Config from "../Config.js";

import icon from "../styling/res/twitter.svg";

export default function TwitterSection() {

    const [field, setField] = useState();
    const [connectedTo, setConnectedTo] = useState({});


    function updateField(event) {
        setField(event.target.value);
    }

    function connect(event) {
        event.preventDefault();
        axios.post(`http://localhost:${Config.serverPort}/api/connect/twitter/${field}`)
            .then((response) => {
                setConnectedTo(response.data);
            });
    }

    function getConnectScreen() {
        if (!connectedTo.personConnected || connectedTo.errorMsg) {
            return (
                <form onSubmit={connect}>
                    <label htmlFor="twitter-handle-input">
                        <h3>Your Twitter handle</h3>
                    </label>
                    <div>
                        <div id="at-symbol"><p>@</p>
                        </div>
                        <input type="text" name="handle" id="twitter-handle-input" className="section-input" onChange={updateField} />
                    </div>
                    <button id="twitter-btn" className="section-btn">Connect</button>
                    <p>{connectedTo.errorMsg ? connectedTo.errorMsg : ""}</p>
                </form>
            );

        } else {

            const goToLink = () => {
                window.open(`https://github.com/${connectedTo.personConnected}`, "__blank");
            }

            return (
                <div className="connected-container twitter-connected">
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
        <div id="twitter-section" className="section">
            <div className="section-icon-container">
                <img src={icon} alt="" className="section-icon" id="twitter-icon" />
            </div>
            <h1>Twitter</h1>
            {getConnectScreen()}
        </div>
    )
}
