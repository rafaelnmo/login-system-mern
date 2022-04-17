import mongoose from "mongoose";

//user schema definition
const EmpresaSchema = new mongoose.Schema({
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
	CNPJ: {
		type: String,
		required: "CNPJ is required here",
	},
	updated: Date,
	created: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model("Empresa", EmpresaSchema);
