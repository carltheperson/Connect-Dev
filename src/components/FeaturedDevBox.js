import React, { useState } from 'react';
import axios from "axios";

import Config from "../Config";

function styleHashtags(bio) {
    return bio.split(" ").map((word, i) => {
        if (word.charAt(0) === "#") return <span className="hashtag" key={i}>{word}</span>;
        return word;
    }).reduce((prev, curr) => [prev, " ", curr]);
}

export default function FeaturedDevBox() {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState();

    // Get name and bio then image
    (() => {
        axios.get(`http://${Config.hostname}/api/feature-name-and-bio `).then((response) => {
            setName(response.data.name);
            setBio(response.data.bio);
        });

        axios.get(`http://${Config.hostname}/api/feature-image`, {
            responseType: 'arraybuffer'
        }).then((response) => {
            setImage(Buffer.from(response.data, 'binary').toString('base64'));
        });

    })();


    return (
        <div id="featured-dev-box">
            <h2 id="feature-title">Featured dev of the day</h2>
            <div id="feature-flex">
                {image && <img id="profile-picture" src={`data:image/jpeg;base64,${image}`} alt="" />}
                <div id="feature-name-bio">
                    <h2 id="feature-name">{name}</h2>
                    <p id="feature-bio">{styleHashtags(bio)}</p>
                </div>
            </div>
        </div>
    )
}
