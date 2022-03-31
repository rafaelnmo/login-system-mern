import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<div className="container">
			<nav className="navbar">
				<ul>
					<li>
						<NavLink to={"/"} onClick={handleClick}>
							Home
						</NavLink>
					</li>

					<li>
						<NavLink to={"/login"} onClick={handleClick}>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink to={"/register"} onClick={handleClick}>
							Create Account
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
