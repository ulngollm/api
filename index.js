import express from "express";
import mongoose from "mongoose";
import Post from "./models/Post.js";
import PostController from "./controllers/PostController.js";

const PORT = 3000;
const PSWD = 'SQNUEQgBwsrHj8g';
const DB_URL = `mongodb+srv://api:${PSWD}@cluster0.ti3c2.mongodb.net/api?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());

async function startApp(){
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, ()=>console.log('Server started on ' + PORT));
		
	} catch (error) {
		console.log(error);
	}
}

app.get('/', function (req, res) {
	console.log(req.query);
	res.send('This is api')
});

app.get('/posts', PostController.getAll);
app.post('/posts', PostController.create);
app.get('/posts/:id', PostController.getOne);
app.put('/posts/:id', PostController.update);
app.delete('/posts/:id', PostController.delete);

 
startApp();