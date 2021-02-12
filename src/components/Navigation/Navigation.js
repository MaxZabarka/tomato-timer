import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Icon from "../Icon/Icon";
import "./Navigation.scss";
const Navigation = () => {
	return (
		<div className="Navigation navbar-dark">
			<Navbar bg="primary">
				<Navbar.Brand href="#home">
					<strong>Pomomagic</strong>
				</Navbar.Brand>
				<Nav className="ml-auto">
					<Icon type="github" size="2rem" />
					<Icon type="instagram" size="2rem" />
				</Nav>
			</Navbar>
		</div>
	);
};

export default Navigation;
