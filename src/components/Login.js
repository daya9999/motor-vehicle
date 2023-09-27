import React from "react";

const Login = () => {
	return (
		<div className="pt-5 pb-5 container-fluid">
			<div className="row">
				<div className="col-lg-3 col-sm-1" />
				<div className="col">
					<form>
						<div className="mb-3">
							<label
								htmlFor="exampleInputEmail1"
								className="form-label"
							>
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
							<div id="emailHelp" className="form-text">
								We'll never share your email with anyone else.
							</div>
						</div>
						<div className="mb-3">
							<label
								htmlFor="exampleInputPassword1"
								className="form-label"
							>
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<div className="mb-3 form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1"
							/>
							<label
								className="form-check-label"
								htmlFor="exampleCheck1"
							>
								Check me out
							</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
				<div className="col-lg-3 col-sm-1" />
			</div>
		</div>
	);
};

export default Login;
