import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Category = new Schema({
	name: { type: String, required: true },
	id: { type: Number, required: true }
});

export default  mongoose.model('Category', Category);
