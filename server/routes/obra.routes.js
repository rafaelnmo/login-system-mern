import express from "express";
import obraCtrl from "../controllers/obra.controller";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

// route that define the endpoint to fetch all the users in the db
router.route("/api/obras").get(obraCtrl.list);

/**
 * Authorized Methods
 */

// route that define the endpoint to create a new obra
/*router
	.route("/api/obras:userId")
	.post(
		authCtrl.requireSignin,
		authCtrl.hasAuthorization,
		authCtrl.isAdmin,
		obraCtrl.create
	);
*/

router.route("/api/obras").post(obraCtrl.create);

// route that define the endpoint to update a sigle user's data
/*router
	.route("/api/obras/:userId")
	.put(
		authCtrl.requireSignin,
		authCtrl.hasAuthorization,
		authCtrl.isAdmin,
		obraCtrl.update
	);*/

router.route("/api/obras/:obraId").put(obraCtrl.update);

// route that define the endpoint to delete a user
router.route("/api/obras/:obraId").delete(obraCtrl.remove);

/*
	This will ensure that every time the Express app receives a 
	request to a route that matches a path containing :userId parameter
	in it, the app will execute the userById controller function
*/
router.param("obraId", obraCtrl.obraByID);

export default router;
