import Post from "../models/Post.js";

class PostController {
	static async create(req, res) {
		const { author, title, comment } = req.body;
		const post = await Post.create({ author, title, comment });
		res.status(200).json(post);
	}
	static async getAll(req, res) {
		try {
			const posts = await Post.find();
			res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	static async getOne(req, res) {
		try {
			const posts = await Post.findById(req.params.id);
			res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	static async update(req, res) {
		try {
			const updPost = await Post.findByIdAndUpdate(
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
			const result = await Post.findByIdAndDelete(id);
			if(result) res.sendStatus(200);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default PostController;
