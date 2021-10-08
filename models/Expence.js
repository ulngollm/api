import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Expence = new Schema({
	title: {type: String, required: true},
	categoryId: Number,
	sum: {type: Number, required: true},
	count: {type: Number},
	date: {type: Date, required: true}
});

export default mongoose.model('Expence', Expence);