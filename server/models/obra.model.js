import mongoose from "mongoose";

//user schema definition
const ObraSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: "Name is required",
	},
	email: {
		type: String,
		trim: true,
		match: [/.+\@.+\..+/, "Please fill a valid email address"],
		required: "Email is required",
	},
	telefone: {
		type: String,
		required: "Telefone is required here",
	},
	responsavel: {
		type: String,
		required: "Responsavel is required here",
	},
	empresa_responsavel: {
		type: String,
	},

	updated: Date,
	created: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model("Obra", ObraSchema);
