import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					MechaZone
				</Link>
				<button
					className="navbar-toggler shadow-none"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/home" className={`nav-link${location.pathname === "/" || location.pathname === "/home" ? " active" : ""}`} aria-current="page">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className={`nav-link${location.pathname === "/about" ? " active" : ""}`} aria-current="page">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/faq" className={`nav-link${location.pathname === "/faq" ? " active" : ""}`} aria-current="page">
								FAQs
							</Link>
						</li>
					</ul>
					<div className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					</div>
					<ul class="navbar-nav">
						<li className="nav-item dropdown">
							<button className="btn nav-link dropdown-toggle shadow-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
								<img src={require("../images/invalid_user.png")} alt="mdo" width="32" height="32" className="rounded-circle" />
							</button>
							<ul className='dropdown-menu text-small dropdown-menu-end' aria-labelledby="dropdownUser1">
							<li><Link className="dropdown-item" to="/settings">Settings</Link></li>
							<li><Link className="dropdown-item" to="/profile">Profile</Link></li>
							<li><hr className="dropdown-divider" /></li>
							<li><Link className="dropdown-item" to="/logout">Logout</Link></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
