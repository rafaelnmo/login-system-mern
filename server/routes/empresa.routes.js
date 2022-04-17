import express from "express";
import empresaCtrl from "../controllers/empresa.controller";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

// route that define the endpoint to fetch all the users in the db
router.route("/api/empresas").get(empresaCtrl.list);

/**
 * Authorized Methods
 */

// route that define the endpoint to create a new obra
/*router
	.route("/api/empresa:userId")
	.post(
		authCtrl.requireSignin,
		authCtrl.hasAuthorization,
		authCtrl.isAdmin,
		empresaCtrl.create
	);
*/
router.route("/api/empresas").post(empresaCtrl.create);

// route that define the endpoint to update a sigle user's data
/*router
	.route("/api/empresa/:userId")
	.put(
		authCtrl.requireSignin,
		authCtrl.hasAuthorization,
		authCtrl.isAdmin,
		empresaCtrl.update
	);
*/
router.route("/api/empresas/:empresaId").put(empresaCtrl.update);

// route that define the endpoint to delete a user
router.route("/api/empresas/:empresaId").delete(empresaCtrl.remove);

/*
	This will ensure that every time the Express app receives a 
	request to a route that matches a path containing :userId parameter
	in it, the app will execute the userById controller function
*/
router.param("empresaId", empresaCtrl.empresaByID);

export default router;
