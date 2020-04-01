import React from 'react';
import {useLocation, useHistory} from "react-router-dom";

export default function Header(props) {
    const location = useLocation();
    const history = useHistory();

    const getPageOn = (pathName) => {
        if(location.pathname === pathName) {
            return "page-on";
        }
        return "";
    }

    return (
        <div className="header">
            <nav>
                <ul>
                    <li className="logo">
                         <h1 className="logo"><span>Connect Dev io</span></h1>
                    </li>
                
                    <li className={"item " + getPageOn("/")} onClick={()=>history.push("/")}>Connect</li>
                    <li className={"item " + getPageOn("/how-it-works")} onClick={()=>history.push("/how-it-works")}>How it works</li>
                   <li className={"item " + getPageOn("/about")} onClick={()=>history.push("/about")}>About</li>
                </ul>
            </nav>
        </div>
    )
}
