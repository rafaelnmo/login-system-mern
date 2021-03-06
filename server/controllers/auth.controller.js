import User from "../models/user.model";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import config from "./../config/config";

/**
 * receives the email and password in req.body. This email is used to retrieve
 * a matching user from the database. Then, the password authentication method
 * defined in UserSchema is used to verify the password that's received in
 * req.body from the client.
 */
const signin = async (req, res) => {
	try {
		let user = await User.findOne({
			email: req.body.email,
		});
		if (!user)
			return res.status("401").json({
				error: "User not found",
			});

		if (!user.authenticate(req.body.password)) {
			return res.status("401").send({
				error: "Email and password don't match.",
			});
		}

		const token = jwt.sign(
			{
				_id: user._id,
			},
			config.jwtSecret
		);

		res.cookie("t", token, {
			expire: new Date() + 9999,
		});

		return res.json({
			token,
			user: {
				_id: user._id,
				name: user.name,
				email: user.email,
			},
		});
	} catch (err) {
		return res.status("401").json({
			error: "Could not sign in",
		});
	}
};

/**
 * clear the response cookie containing the signed JWT
 */
const signout = (req, res) => {
	res.clearCookie("t");
	return res.status("200").json({
		message: "signed out",
	});
};

/**
 * verify if the incoming request has a vaid JWT in the Authorization header
 */
const requireSignin = expressJwt({
	secret: config.jwtSecret,
	userProperty: "auth",
	algorithms: ["sha1", "RS256", "HS256"],
});

/**
 * check whether the authenticated user is the same as the user being updated
 * or deleted before corresponding CRUD cotroller function is allowed to proceed
 */
const hasAuthorization = (req, res, next) => {
	const authorized =
		req.profile && req.auth && req.profile._id == req.auth._id;
	if (!authorized) {
		return res.status("403").json({
			error: "User is not authorized",
		});
	}
	next();
};

/**
 * verify if the incoming request has a vaid JWT in the Authorization header
 */
const isAdmin = (req, res, next) => {
	const authorized = req.profile.admin == true;
	if (!authorized) {
		return res.status("403").json({
			error: "User is not authorized",
		});
	}
	next();
};

export default {
	signin,
	signout,
	requireSignin,
	isAdmin,
	hasAuthorization,
};
