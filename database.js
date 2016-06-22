"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize("mysql://root@localhost/test1", {});

const Board = sequelize.define("board", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
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
		type: Sequelize.STRING,
		allowNull: false
	},
	isOpPost: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	},
	topicId: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	boardId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: Board,
			key: "id"
		}
	}
});

Post.belongsTo(Post, {
	targetKey: "id",
	foreignKey: "topicId"
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
		return Post.findAll({
			where: {
				threadId: threadId
			}
		});
	},
	getBoardThreads(boardId) {
		return Post.findAll({
			where: {
				$and: {
					boardId: boardId,
					isOpPost: true
				}
			}
		});
	},
	getBoards() {
		return Board.findAll();
	}
};