import React from "react";
const Register = () => {
	return (
		<div className="container-register">
			<h1>Estou na página de Criar Conta</h1>

			<form action="#" className="form-login">
				<label className="form-label" for="uname">
					Username
				</label>
				<input
					type="text"
					name="uname"
					placeholder="Digite seu username"
					className="form-element"
					required
				></input>

				<label className="form-label" for="email">
					E-mail
				</label>
				<input
					type="email"
					name="email"
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

				<label for="pass" className="form-label">
					Confirmar Password
				</label>
				<input
					type="password"
					name="pass"
					placeholder="Digite sua senha novamente"
					className="form-element"
					required
				></input>

				<button className="form-button">Criar conta</button>
			</form>
		</div>
	);
};
export default Register;
