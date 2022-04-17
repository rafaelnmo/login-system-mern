import React from "react";
import "./Login.css";

const Login = () => {
	return (
		<div className="container-login">
			<h1>Estou na página de Login</h1>

			<form action="#" className="form-login">
				<label className="form-label" for="uname">
					Username
				</label>
				<input
					type="text"
					name="uname"
					placeholder="Digite seu email"
					className="form-element"
					required
				></input>

				<label for="pass" className="form-label">
					Password
				</label>
				<input
					type="password"
					name="pass"
					placeholder="Digite sua senha"
					className="form-element"
					required
				></input>

				<button className="form-button">Login</button>
			</form>
		</div>
	);
};
export default Login;
