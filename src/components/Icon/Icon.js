import React from "react";
import classes from "./Icon.module.scss";
const Icon = (props) => {
	return (
		<i
			style={{ fontSize: props.size }}
			className={`bi bi-${props.type} ${classes.Icon}`}
		/>
	);
};

export default Icon;
