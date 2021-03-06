import config from "./config/config";
import app from "./express";
import mongoose from "mongoose";

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
	useNewUrlParser: true,
	//useCreateIndex: true,   <--- no longer supported option. Mongoose 6 always behaves as useCreteIndex is true
	useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
	throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.listen(config.port, (err) => {
	if (err) {
		console.log(err);
	}
	console.info("Server started on port %s.", config.port);
});
