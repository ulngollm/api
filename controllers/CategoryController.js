import Category from "../models/Category.js";

class CategoryController {
	static async create(req, res) {
		try {
			const category = await Category.create(req.body);
			res.json(category);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async getAll(req, res) {
		try {
			const categories = await Category.find();
			res.json(categories);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async getOne(req, res) {
		try {
			const categories = await Category.findOne({id: req.params.id});
			res.json(categories);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async update(req, res) {
		try {
			const updCategory = await Category.findOneAndUpdate(
				{id: req.params.id},
				req.body
			);
			res.sendStatus(200);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async delete(req, res) {
		try {
			const result = await Category.findOneAndDelete({id: req.params.id});
			if (result) res.sendStatus(200);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default CategoryController;
