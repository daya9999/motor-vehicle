import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="container footer mt-auto py-3 bg-light">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<p className="col-md-4 mb-0 text-muted">© 2023 MechaZone, Inc</p>
				<ul className="nav col-md-4 justify-content-end">
					<li className="nav-item">
						<Link to="/home" className="nav-link px-2 text-muted">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link px-2 text-muted">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/faq" className="nav-link px-2 text-muted">
							FAQs
						</Link>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
