import React from 'react';
import Navigation from "../Navigation/Navigation"
import "./Layout.scss"

const layout = (props) => {
    return (
        <div className="Layout">
            <Navigation/>
            {props.children}
        </div>
    );
};

export default layout;