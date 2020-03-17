import React, { useState } from 'react';
import axios from "axios";

import Config from "../Config.js";

import icon from "../styling/res/github.svg";

export default function GithubSection() {

    const [field, setField] = useState();


    function updateField(event) {
        setField(event.target.value);
    }

    function connect(event) {
        event.preventDefault();
        axios.post(`http://localhost:${Config.serverPort}/api/connect/github/${field}`)
            .then((response) => {
                // response.data.personConnected
            }).catch(((error) => {
                // error.response.data.msg
        }));
    }

    return (
        <div id="github-section" className="section">
           <div className="section-icon-container">
                <img src={icon} alt="" className="section-icon" id="github-icon"/>
            </div>
            <h1>GitHub</h1>
            <form onSubmit={connect}>
                <label htmlFor="github-username-input">
                    <h3>Your Github username</h3>
                </label>

                <div>
                    <input type="text" name="handle" id="github-username-input" className="section-input" onChange={updateField}/>
                </div>
                <button id="github-btn" className="section-btn">Connect</button>
            </form>
        </div>
    )
}
