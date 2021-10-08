import express from "express";
import mongoose from "mongoose";
import Post from "./models/Post.js";
import PostController from "./controllers/PostController.js";
import ExpenceController from "./controllers/ExpenceController.js";
import CategoryController from "./controllers/CategoryController.js";

const PORT = 3000;
const PSWD = "pswd";
const DB_URL = `mongodb+srv://api:${PSWD}@cluster0.ti3c2.mongodb.net/api?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

async function startApp() {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, () => console.log("Server started on " + PORT));
	} catch (error) {
		console.log(error);
	}
}

app.get("/", function (req, res) {
	console.log(req.query);
	res.send("This is api");
});

app.route("/posts")
	.get(PostController.getAll)
	.post(PostController.create);
app.route("/posts/:id")
	.get(PostController.getOne)
	.put(PostController.update)
	.delete(PostController.delete);

app.route("/expences")
	.get(ExpenceController.getAll)
	.post(ExpenceController.create);
app.get("/expences/date/:date", ExpenceController.getAllByDate);
app.get("/expences/category/:categoryId", ExpenceController.getAllByCategory);
app.route("/expences/:id")
	.get(ExpenceController.getOne)
	.put(ExpenceController.update)
	.delete(ExpenceController.delete);

app.route("/categories")
	.get(CategoryController.getAll)
	.post(CategoryController.create);
app.route("/categories/:id")
	.get(CategoryController.getOne)
	.put(CategoryController.update)
	.delete(CategoryController.delete);
startApp();
