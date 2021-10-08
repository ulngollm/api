import Post from "../models/Post.js";

class PostController{
	static async create(req, res){
		const {author, title, comment} = req.body;
		const post = await Post.create({author, title, comment});
		res.json(post);
	}
	static async getAll(req, res){
		try {
			const posts = await Post.find();
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}

	}
	static async getOne(req, res){
		console.log(req.params.id);
		try {
			const posts = await Post.findById(req.params.id);
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}

	}
	static async update(req, res){
		try {
			const updPost = await Post.findByIdAndUpdate(req.params.id, post);
			return res.json(updPost);
		} catch (error) {
			res.status(500).json(error);
		}

	}
	static async delete(req, res){
		try {
			const id = req.params.id;
			const post = await Post.findByIdAndDelete(id);
			res.status(200);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default PostController;