import React, { useState, Fragment } from 'react';
import axios from "axios";

import Config from "../Config";

export default function ConnectSection(props) {

    const set = props.settings;

    const [field, setField] = useState();
    const [connectedTo, setConnectedTo] = useState({});
    const agreeToFeture = useState({checked: true});
    const [errorMsg, setErrorMsg] = useState();

    function getConnectScreen() {
        if (!connectedTo.personConnected || connectedTo.errorMsg) {
            return (
                <div className={`connectform connectform-${set.name}`}>
                    <form onSubmit={connect}>
                        <label htmlFor={`${set.name}-username-input`}>
                            <h3>Your {set.displayName} {set.usernameName}</h3>
                        </label>
                        <div>
                            {set.specialInputField}
                            <input type="text" name="username" id={`${set.name}-username-input`}
                                className="input" onChange={updateField} />
                        </div>
                        <button className="section-btn">Connect</button>

                        { (set.name === "twitter") &&
                        <label className="checkbox-container">
                            <p id="checkbox-text"><span>Give me a chance to become featured developer of the day.</span></p>
                            <input type="checkbox" defaultChecked={agreeToFeture}/>
                            <span className="checkmark"></span>
                        </label>
                        }
                        <p className="error-msg" key={errorMsg}>{connectedTo.errorMsg ? connectedTo.errorMsg : ""}</p>
                    </form>
                </div>
            );

        } else {

            const goToLink = () => {
                window.open(`https://${set.name}.com/${connectedTo.personConnected}`, "__blank");
            }

            return (
                <div className={`connected ${set.name}-connected`}>
                    <div className="screen">
                        <h4 className="text">You connected width</h4>
                        <h4 className="with">{connectedTo.personConnected}</h4>
                        <button className="btn section-btn" onClick={goToLink}>Check them out</button>
                        <p className="explainer">Someone will connect with you shortly</p>
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
        axios.post(`http://${Config.hostname}/api/connect/`, {website: set.name, username: field, feture: agreeToFeture[0].checked})
            .then((response) => {
                setConnectedTo(response.data);
                setErrorMsg(new Date());
            });
    }


    return (
        <div className={`section ${set.name}-section`}>
            <div className="icon-container">
                <img src={set.icon} alt="" className="icon" id={`${set.name}-icon`} />
            </div>
            <h1>{set.displayName}</h1>
            {getConnectScreen()}
        </div>
    )
}
