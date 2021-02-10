import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Icon from "../Icon/Icon"
import "./Navigation.scss"
const Navigation = () => {
	return (
		<div className="Navigation navbar-dark">
		<Navbar bg="primary" expand="sm">
			<Navbar.Brand href="#home"><strong>Tomagic</strong></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Icon type="github" size="2rem"/> 
					<Icon type="instagram" size="2rem"/>
					<Button variant="secondary">Settings</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</div>
	);
};

export default Navigation;
