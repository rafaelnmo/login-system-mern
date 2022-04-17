import express from "express";
// middleware that simplify the browser-server communication
import bodyParser from "body-parser";
// parse and set cookies in request objects
import cookieParser from "cookie-parser";
// attempt to compress response bodies for all requests
import compress from "compression";
// collection of middleware functions to help secure Express apps
import helmet from "helmet";
// middleware that enable cross-origin resource sharing (CORS)
import cors from "cors";

import Template from "./template";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

import obraRoutes from "./routes/obra.routes";
import empresaRoutes from "./routes/empresa.routes";

const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use("/", userRoutes);
app.use("/", authRoutes);

app.use("/", obraRoutes);
app.use("/", empresaRoutes);

app.get("/", (req, res) => {
	res.status(200).send(Template());
});

// Catch unauthorised errors
app.use((err, req, res, next) => {
	if (err.name === "UnauthorizedError") {
		res.status(401).json({ error: err.name + ": " + err.message });
	} else if (err) {
		res.status(400).json({ error: err.name + ": " + err.message });
		console.log(err);
	}
});

export default app;
