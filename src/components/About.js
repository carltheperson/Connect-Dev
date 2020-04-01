import React from 'react'

export default function About() {
    return (
        <div className="page">
            <h1 className="title">About</h1>
            <p>
                This site is made as a personal project and not as an official website. 
                Feel free to contact me on <a href="https://twitter.com/carlThePerson">Twitter</a> if you have any questions or comments.
            </p>
            <h2>Cookies</h2>
            <p>
                This site collects no cookies.
            </p>
            <h2>Privacy</h2>
            <p>
                Your username will be stored in a database until someone else connects with you, which is not very long. Your username will be shown to one random person.
                If you connect using Twitter and agree to have a chance at being featured, your Twitter profile might be scraped for your name and bio, and displayed on the site for one day. If you want any information removed from the site, I will happily do that for you. All the information temporarily collected is already public.
            </p>
        </div>
    )
}
