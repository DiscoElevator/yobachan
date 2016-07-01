import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class BoardService {
	private boards = [];

	constructor(private http: Http) {}

	getBoards() {
		return this.http.get("/api/boards").toPromise().then(res => res.json()).then(boards => {
			this.boards = boards;
			return boards;
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
};