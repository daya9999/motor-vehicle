import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	const user = undefined;
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
					<img alt="gear-icon" src={require("../images/gear.svg").default} />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/home" className={`nav-link${location.pathname === "/" || location.pathname === "/home" ? " active" : ""}`} aria-current="page">
								<span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">
									Home
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className={`nav-link${location.pathname === "/about" ? " active" : ""}`} aria-current="page">
								<span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">
									About
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/faq" className={`nav-link${location.pathname === "/faq" ? " active" : ""}`} aria-current="page">
								<span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">
									FAQs
								</span>
							</Link>
						</li>
					</ul>
					<div className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					</div>
					<ul class="navbar-nav">
						{user && <li className="nav-item dropdown">
							<button className="btn nav-link dropdown-toggle shadow-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
								<img src={require("../images/invalid_user.png")} alt="mdo" width="32" height="32" className="rounded-circle" />
							</button>
							<ul className='dropdown-menu text-small dropdown-menu-end' aria-labelledby="dropdownUser1">
								<li>
									<Link className="dropdown-item" to="/settings"><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Settings</span></Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/profile"><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Profile</span></Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link className="dropdown-item" to="/logout"><span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Logout</span></Link>
								</li>
							</ul>
						</li>}
						{!user && <li className="nav-item">
							<Link className={`nav-link rounded shadow-none${(location.pathname === "/login" || location.pathname === "/signup") ? ' active' : ''}`} to='/login'>
								<span data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse">Login / Signup</span>
							</Link>
						</li>}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
