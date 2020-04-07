import React, {useEffect} from 'react'

export default function HowItWorks() {
    useEffect(()=> {
        window.scrollTo(0, 0);
    });

    return (
        <div className="page">
            <h1 className="title">How it works</h1>
            <p>
            When you leave your username, it will be saved temporarily in a database until someone else wants to be connected to someone. 
            When that happens they will be shown a screen saying they connected with you.
            <br/>
            <br/>
    
            You can hear more about how the site is made on the <a href="https://github.com/carlriis/Connect-Dev">Github repository</a>.</p>
        </div>
    )
}
