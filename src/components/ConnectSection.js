import React, { useState } from 'react';
import axios from "axios";

import Config from "../Config";

export default function ConnectSection(props) {

    const set = props.settings;

    const [field, setField] = useState();
    const [connectedTo, setConnectedTo] = useState({});
    const agreeToFeture = useState({checked: true})

    function getConnectScreen() {
        if (!connectedTo.personConnected || connectedTo.errorMsg) {
            return (
                <form onSubmit={connect}>
                    <label htmlFor={`${set.name}-${set.usernameName}-input`}>
                        <h3>Your {set.displayName} {set.usernameName}</h3>
                    </label>
                    <div>
                        {set.specialInputField}
                        <input type="text" name={set.usernameName} id={`${set.name}-${set.usernameName}-input`} className="section-input" onChange={updateField} />
                    </div>
                    <button id={`${set.name}-btn`} className="section-btn">Connect</button>

                    { (set.name === "twitter") &&
                    <label className="checkbox-container">
                        <p id="checkbox-text"><span>Give me a chance to become featured developer of the day.</span></p>
                        <input type="checkbox" defaultChecked={agreeToFeture}/>
                        <span className="checkmark"></span>
                    </label>
                    }
                    <p id={`error-${set.name}`}>{connectedTo.errorMsg ? connectedTo.errorMsg : ""}</p>
                </form>
            );

        } else {

            const goToLink = () => {
                window.open(`https://${set.name}.com/${connectedTo.personConnected}`, "__blank");
            }

            return (
                <div className={`connected-container ${set.name}-connected`}>
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

    function updateField(event) {
        setField(event.target.value);
    }

    function connect(event) {
        event.preventDefault();
        axios.post(`http://${Config.hostname}/api/connect/`, {website: set.name, username: field, feture: agreeToFeture})
            .then((response) => {
                setConnectedTo(response.data);
            });
    }


    return (
        <div id={`${set.name}-section`} className="section">
            <div className="section-icon-container">
                <img src={set.icon} alt="" className="section-icon" id={`${set.name}-icon`} />
            </div>
            <h1>{set.displayName}</h1>
            {getConnectScreen()}
        </div>
    )
}
