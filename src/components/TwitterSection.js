import React, { useState } from 'react';
import axios from "axios";

import Config from "../Config.js";

import icon from "../styling/res/twitter.svg";

export default function TwitterSection() {

    const [field, setField] = useState();


    function updateField(event) {
        setField(event.target.value);
    }

    function connect(event) {
        event.preventDefault();
        axios.post(`http://localhost:${Config.serverPort}/api/connect/twitter/${field}`)
            .then((response) => {
                // response.data.personConnected
            }).catch(((error) => {
                // error.response.data.msg
        }));
    }


    return (
        <div id="twitter-section" className="section">
            <div className="section-icon-container">
                <img src={icon} alt="" className="section-icon" id="twitter-icon" />
            </div>
            <h1>Twitter</h1>
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
            </form>
        </div>
    )
}
