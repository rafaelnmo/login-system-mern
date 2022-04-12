/*const config = {
	env: process.env.NODE_ENV || "development",
	port: process.env.PORT || 3000,
	jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
	mongoUri:
		process.env.MONGODB_URI ||
		process.env.MONGO_HOST ||
		"mongodb://" +
			(process.env.IP || "localhost") +
			":" +
			(process.env.MONGO_PORT || "27017") +
			"/mernproject",
};

export default config;
*/

// Password: k2swm4p6
// MyfirstDatabase: mernproject
//mongodb+srv://roliveira:<password>@cluster0.em6ub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const password = "K2swm4p6g8h9";

const config = {
	env: process.env.NODE_ENV || "development",
	port: process.env.PORT || 3000,
	jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
	mongoUri:
		"mongodb+srv://roliveira:" +
		password +
		"@cluster0.em6ub.mongodb.net/mernproject?retryWrites=true&w=majority",
};

export default config;

/*

const config = {
	env: process.env.NODE_ENV || "development",
	port: process.env.PORT || 3000,
	jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
	mongoUri:
		"mongodb+srv://roliveira:K2swm4p6g8h9@cluster0.em6ub.mongodb.net/mernproject?retryWrites=true&w=majority",
};

export default config;
*/
