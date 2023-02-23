import React, {useState} from "react";

import Nav from './Nav';

function Header () {
    return(
        <div id="header">
            <h2>Header</h2>
            <Nav/>
        </div>
    );
}

export default Header;