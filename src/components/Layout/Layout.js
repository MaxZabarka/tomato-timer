import React from 'react';
import Navigation from "../Navigation/Navigation"
const layout = (props) => {
    // this.inputElementRef = React.createRef();

    return (
        <React.Fragment>
            <Navigation/>
            {props.children}
        </React.Fragment>
    );
};

export default layout;