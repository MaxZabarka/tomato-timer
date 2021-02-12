import React from "react";
import classes from "./Icon.module.scss";
const Icon = (props) => {
	let link = "";
	if (props.type === "github") {
		link = "https://www.github.com/MaxZabarka";
	} else if (props.type === "instagram") {
		link = "https://www.instagram.com/max.zabarka/";
	}
	return (
		<a className={classes.link} href={link}>
			<i
				style={{ fontSize: props.size }}
				className={`bi bi-${props.type} ${classes.Icon}`}
			/>
		</a>
	);
};

export default Icon;
