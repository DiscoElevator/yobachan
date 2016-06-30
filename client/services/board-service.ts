import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class BoardService {
	constructor(private http: Http) {}

	getBoards() {
		return this.http.get("/api/boards").toPromise().then(res => res.json());
	}

	getBoard(boardName: string) {
		return this.http.get("/api/" + boardName).toPromise().then(res => res.json());
	}

	getBoardThreads(boardName: string) {
		return this.http.get("/api/" + boardName + "/threads").toPromise().then(res => res.json());
	}
};