import React, { useState } from 'react';
import axios from "axios";

import Config from "../Config";

import twitterIcon from "../styling/res/twitter_dark_blue.svg";

function styleHashtagsAndTags(bio) {
    return bio.split(" ").map((word, i) => {
        if (word.charAt(0) === "#") return <span className="hashtag" key={i}>{word}</span>;
        if (word.charAt(0) === "@") return <span className="tag" key={i}>{word}</span>;
        return word;
    }).reduce((prev, curr) => [prev, " ", curr]);
}

export default function FeaturedDevBox() {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState();
    const [hover, setHover] = useState(null);

    const toggleHover = () => {setHover(!hover)};
    const getHoverClass = () => {
        if(hover == null) return "start-hover";
        if(hover == false) return "not-hovering"
        return "hovering";
    }
    const visitFeature = () => {
        window.open(`https://twitter.com/${name}`, "__blank");
    }

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
            <div id="feature-link-container" className={getHoverClass()}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                onClick={visitFeature}>
                <p id="feature-visit-text">Visit Twitter profile</p>
                <img src={twitterIcon} id="feature-icon" alt="" />
            </div>
            
            <h2 id="feature-title">Featured dev of the day</h2>
            <div id="feature-flex">
                {image && <img id="profile-picture" src={`data:image/jpeg;base64,${image}`} alt="" />}
                <div id="feature-name-bio">
                    <h2 id="feature-name">{name}</h2>
                    <p id="feature-bio">{styleHashtagsAndTags(bio)}</p>
                </div>
            </div>
        </div>
    )
}
