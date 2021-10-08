import Expence from "../models/Expence.js";

class ExpenceController{
	static async create(req, res){
		try {
			// const {title, category, date, summ, count} = req.body;
			const newItem = await Expence.create(req.body);
			return res.json(newItem);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	static async getAll(req, res){
		try {
			const expence = await Expence.find();
			return res.json(expence);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	static async getOne(req, res){
		try {
			const posts = await Post.find();
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	static async update(req, res){
		try {
			const posts = await Post.find();
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	static async delete(req, res){
		try {
			const posts = await Post.find();
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default ExpenceController;