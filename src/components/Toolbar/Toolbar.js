import React from 'react';
import './Toolbar.css';
import MainMenu from "../MainMenu/MainMenu";
import Logo from "../Logo/Logo";
import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";

const Toolbar = props => (
    <header>
        <div className="logo-toggle-container">
            <Logo url={props.url}/>
            <DrawerToggleButton id="show-menu"/>
        </div>
        <input className="toggle-mobile-navigation"
               type="checkbox"
               id="show-menu"
               onChange={props.openMenuMobile}
               checked={props.checked}/>
        <div id="main-menu-container">
           <div className="inner-content">
               <MainMenu links={props.links}/>
               <button>click me</button>
           </div>
        </div>
    </header>
);

export default Toolbar;