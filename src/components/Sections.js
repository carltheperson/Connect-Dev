import React from 'react';
import ConnectSection from './ConnectSection';

import twitterIcon from "../styling/res/twitter.svg";
import githubIcon from "../styling/res/github.svg";

export default function Sections() {

    const twitter = {
        name: "twitter",
        displayName: "Twitter",
        usernameName: "handle",
        specialInputField: <div className="at-symbol"><p>@</p></div>,
        icon: twitterIcon
    }

    const github = {
        name: "github",
        displayName: "GitHub",
        usernameName: "username",
        icon: githubIcon
    }

    return (
        <div>
            <ConnectSection settings={twitter} />
            <ConnectSection settings={github} />
        </div>
    )
}
