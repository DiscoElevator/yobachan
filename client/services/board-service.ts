import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class BoardService {
	private boards = [];

	constructor(private http: Http) {}

	getBoards() {
		return this.http.get("/api/boards").toPromise().then(res => res.json()).then(boards => {
			this.boards = boards;
			return Array.from(boards);
		});
	}

	getBoard(boardName: string) {
		let board = this.boards.find(el => el.name === boardName);
		if (board) {
			return Promise.resolve(board);
		} else {
			return this.http.get("/api/" + boardName).toPromise().then(res => res.json()).then(newBoard => {
				this.boards.push(newBoard);
				return newBoard;
			});
		}
	}

	getBoardThreads(boardName: string) {
		return this.http.get("/api/" + boardName + "/threads").toPromise().then(res => res.json());
	}

	getThreadPosts(threadId: number) {
		return this.http.get("/api/thread/" + threadId).toPromise().then(res => res.json());
	}

	createThread(post: any) {
		return this.http.post("/api/thread", post).toPromise().then(res => res.json());
	}

	createPost(post: any) {
		return this.http.post("/api/thread/" + post.threadId, post).toPromise().then(res => res.json());
	}

	post(post) {
		if (!post) {
			return Promise.reject("no post");
		}
		if (post.threadId) {
			return this.createPost(post);
		} else {
			return this.createThread(post);
		}
	}
};