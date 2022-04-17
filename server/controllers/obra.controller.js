import Obra from "../models/obra.model";
import User from "../models/user.model";
import extend from "lodash/extend";
import errorHandler from "./../helpers/dbErrorHandler";

/**
 * function that creates a new obra with the JSOM object
 * that's received in the POST requests at /api/obras/:userId
 */
const create = async (req, res) => {
	const obra = new Obra(req.body);
	try {
		await obra.save();
		return res.status(200).json({
			message: "Successfully included NEW OBRA!",
		});
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};

/**
 * Load the matching user (using user value to compare) and append
 * this user, if found, to req.
 */
const obraByID = async (req, res, next, id) => {
	try {
		let obra = await Obra.findById(id);
		if (!obra)
			return res.status("400").json({
				error: "Obra not found",
			});
		req.profile = obra;
		next();
	} catch (err) {
		return res.status("400").json({
			error: "Could not retrieve user",
		});
	}
};

/**
 * retrieves the obra details from req.profile and send the obra object
 * in the response to the requesting client
 */
const read = (req, res) => {
	return res.json(req.profile);
};

/**
 * function finds all the users from the database, populates only the
 * name, email, created, and updated fields in the resulting obras list,
 * and then returns this list of users as JSON objects in an array to
 * the requesting client.
 */
const list = async (req, res) => {
	try {
		let obras = await Obra.find().select(
			"name email telefone responsavel empresa_responsavel"
		);
		res.json(obras);
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};

/**
 * retrieves the obra details from req.profile and then uses the
 * loadash module to extend and merge the changes that came in the request body
 */

const update = async (req, res) => {
	try {
		let obra = req.profile;
		console.log(obra);
		obra = extend(obra, req.body);
		obra.updated = Date.now();
		await obra.save();
		res.json(obra);
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};

const remove = async (req, res) => {
	try {
		let obra = req.profile;
		let deletedObra = await obra.remove();
		res.json(deletedObra);
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};

export default {
	create,
	obraByID,
	read,
	list,
	remove,
	update,
};
