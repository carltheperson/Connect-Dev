import React from 'react'

export default function TwitterSection() {
    return (
        <div id="twitter-section">
            <h1>Twitter</h1>
            <form>
                <label for="twitter-handle-input">
                    <h3>Your Twitter handle</h3>
                </label>
                <div>
                    <div id="at-symbol"><p>@</p></div> <input type="text" name="handle" id="twitter-handle-input"/>
                </div>
                <button id="twitter-btn">Connect</button>

            </form>
        </div>
    )
}
