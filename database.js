"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize("mysql://root@localhost/test1", {});

const Board = sequelize.define("board", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		primaryKey: true
	},
	description: {
		type: Sequelize.STRING
	}
});

const Post = sequelize.define("post", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	isOpPost: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	},
	threadId: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	boardName: {
		type: Sequelize.STRING,
		allowNull: false,
		references: {
			model: Board,
			key: "name"
		}
	}
});

Post.belongsTo(Post, {
	targetKey: "id",
	foreignKey: "threadId"
});

module.exports = {
	connect() {
		return sequelize.authenticate().then(() => {
			return Promise.all([Board.sync(), Post.sync()]);
		});
	},
	createThread(post) {
		post.isOpPost = true;
		return this.createPost(post);
	},
	createPost(post) {
		return Post.create(post);
	},
	createBoard(board) {
		return Board.create(board);
	},
	getThreadPosts(threadId) {
		let opPostPromise = Post.findOne({where: {id: threadId}});
		let threadPostsPromise = Post.findAll({
			where: {
				threadId: threadId
			}
		});
		return Promise.all([opPostPromise, threadPostsPromise]).then(posts => {
			return [posts[0], ...posts[1]];
		});
	},
	getBoardThreads(boardName) {
		return Post.findAll({
			where: {
				$and: {
					boardName: boardName,
					isOpPost: true
				}
			}
		});
	},
	getBoardByName(boardName) {
		return Board.findOne({
			where: {
				name: boardName
			}
		});
	},
	getBoards() {
		return Board.findAll();
	}
};