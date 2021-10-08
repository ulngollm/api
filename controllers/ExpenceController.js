import Expence from "../models/Expence.js";

class ExpenceController {
	static async create(req, res) {
		try {
			const newItem = await Expence.create(req.body);
			res.json(newItem);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async getAll(req, res) {
		try {
			const expence = await Expence.find();
			 res.json(expence);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async getAllByDate(req, res) {
		try {
			const expence = await Expence.find({ date: req.params.date });
			res.json(expence);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async getAllByCategory(req, res) {
		try {
			const expence = await Expence.find({ categoryId: req.params.categoryId });
			res.json(expence);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async getOne(req, res) {
		try {
			const expence = await Expence.findById(req.params.id);
			res.json(expence);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async update(req, res) {
		try {
			const posts = await Expence.findByIdAndUpdate(
				req.params.id,
				req.body
			);
			res.sendStatus(200);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async delete(req, res) {
		try {
			const id = req.params.id;
			const expence = await Expence.findByIdAndDelete(id);
			res.sendStatus(200);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default ExpenceController;
