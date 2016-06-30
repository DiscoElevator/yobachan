"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database");

// app.get("/:board", (req, res) => {

// });
// app.get("/:board/:topic", (req, res) => {

// });
app.use(bodyParser.json());

app.get("/api/boards", (req, res) => {
	db.getBoards().then(boards => {
		res.status(200).json(boards);
	});
});

app.get("/api/:boardName", (req, res) => {
	db.getBoardByName(req.params.boardName).then(board => {
		res.status(200).json(board);
	});
});

app.get("/api/:boardName/threads", (req, res) => {
	db.getBoardThreads(req.params.boardName).then(threads => {
		res.status(200).json(threads);
	});
});

app.get("/api/thread/:id", (req, res) => {
	db.getThreadPosts(req.params.id).then(posts => {
		res.status(200).json(posts);
	});
});

app.post("/api/thread", (req, res) => {
	let post = req.body;
	db.createThread(post).then(() => {
		res.status(200).json({});
	});
});

app.post("/api/thread/:id", (req, res) => {
	let post = req.body;
	post.topicId = req.params.id;
	db.createPost(post).then(() => {
		res.status(200).json({});
	});
});

app.get("/api/post/:id", (req, res) => {

});

app.get("/uploads/:id", (req, res) => {

});

app.use(express.static(__dirname + "/public"));

app.get("/*", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

db.connect().then(() => {
	app.listen(3000, () => {
		console.log("Server started");
	});
}).catch(err => {
	console.error(err);
});

function addTestBoard() {
	db.createBoard({
		name: "t2",
		description: "test board 2"
	}).then(() => {
		console.log("board created");
	});
}
