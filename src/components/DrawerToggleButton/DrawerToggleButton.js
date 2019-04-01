import React from 'react';

import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <label htmlFor={props.id} className="toggle-button">
        <i className="fas fa-bars"/>
    </label>
);

export default DrawerToggleButton;