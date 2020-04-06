import React, { useState } from 'react';
import {useLocation, useHistory} from "react-router-dom";

import menuIcon from "./../styling/res/burger_menu.svg";
import logo from "./../styling/res/logo.svg";

export default function Header(props) {
    const location = useLocation();
    const history = useHistory();

    const [showMenu, setShowMenu] = useState(false);

    const togleShowMenu = () => {
       setShowMenu(!showMenu); 
    }

    const getShowMenu = () => {
        if (showMenu) return "show-menu";
        return "";
    }
    
    const getPageOn = (pathName) => {
        if(location.pathname === pathName) {
            return "page-on";
        }
        return "";
    }

    const changePage = (page) => {
        togleShowMenu();
        history.push(page);
    }

    return (
        <div className="header">
            <nav>
                <img src={menuIcon} alt="menu-icon" className="menu-icon" onClick={togleShowMenu}/>
                <ul className={getShowMenu()}>
                    <li><img src={logo} alt="logo" className="logo"/></li>
                
                    <li className={"item " + getPageOn("/")} onClick={()=>changePage("/")}>Connect</li>
                    <li className={"item " + getPageOn("/how-it-works")} onClick={()=>changePage("/how-it-works")}>How it works</li>
                   <li className={"item " + getPageOn("/about")} onClick={()=>changePage("/about")}>About</li>
                </ul>
            </nav>
        </div>
    )
}

