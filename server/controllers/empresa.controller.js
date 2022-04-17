import Empresa from "../models/empresa.model";
import User from "../models/user.model";
import extend from "lodash/extend";
import errorHandler from "./../helpers/dbErrorHandler";

/**
 * function that creates a new obra with the JSOM object
 * that's received in the POST requests at /api/obras/:userId
 */
const create = async (req, res) => {
	const empresa = new Empresa(req.body);
	try {
		await empresa.save();
		return res.status(200).json({
			message: "Successfully included NEW EMPRESA!",
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
const empresaByID = async (req, res, next, id) => {
	try {
		let empresa = await Empresa.findById(id);
		if (!empresa)
			return res.status("400").json({
				error: "User not found",
			});
		req.profile = empresa;
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
		let empresas = await Empresa.find().select(
			"name email telefone CNPJ updated created"
		);
		res.json(empresas);
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
		let empresa = req.profile;
		empresa = extend(empresa, req.body);
		empresa.updated = Date.now();
		await empresa.save();
		res.json(empresa);
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};

const remove = async (req, res) => {
	try {
		let empresa = req.profile;
		let deletedEmpresa = await empresa.remove();
		res.json(deletedEmpresa);
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};

export default {
	create,
	empresaByID,
	read,
	list,
	remove,
	update,
};
