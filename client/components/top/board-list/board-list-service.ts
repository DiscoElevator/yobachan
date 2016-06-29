import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class BoardListService {
	constructor(private http: Http) {}
	getBoards() {
		return this.http.get("/api/boards").toPromise();
	}
};