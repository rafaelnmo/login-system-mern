const password = "K2swm4p6g8h9";

const config = {
	env: process.env.NODE_ENV || "development",
	port: process.env.PORT || 3001,
	jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
	mongoUri:
		"mongodb+srv://roliveira:" +
		password +
		"@cluster0.em6ub.mongodb.net/mernproject?retryWrites=true&w=majority",
};

export default config;
