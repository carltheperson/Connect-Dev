import React from 'react'

export default function GithubSection() {
    return (
        <div id="github-section" className="section">
            <h1>Github</h1>
            <form>
                <label for="github-username-input">
                    <h3>Your Github username</h3>
                </label>

                <div>
                    <input type="text" name="handle" id="github-username-input" className="section-input"/>
                </div>
                <button id="github-btn" className="section-btn">Connect</button>
            </form>
        </div>
    )
}
