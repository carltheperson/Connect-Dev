import React from 'react'

import profilePicture from "../styling/res/Linus.jpeg";

export default function FeturedDevBox() {

    function styleHashtags(bio) {
        return bio.split(" ").map((word) => {
            if (word.charAt(0) === "#") return <span className="hashtag">{word}</span>;
            return word;
        }).reduce((prev, curr) => [prev, " ", curr]);
    }

    // Placeholders
    const name = "Linus Torvalds";
    const bio = "Works at Linux Foundation. Born 28 December 1969 is a Finnish-American #Linux #Git #Open-source";


    return (
        <div id="fetured-dev-box">
            <h2 id="feture-title">Fetured dev of the day</h2>

            <div id="feture-flex">
                <img id="profile-picture" src={profilePicture} alt=""/>
                <div id="feture-name-bio">
                    <h2 id="feture-name">{name}</h2>
                    <p id="feture-bio">{styleHashtags(bio)}</p>
                </div>
            </div>

        </div>
    )
}
