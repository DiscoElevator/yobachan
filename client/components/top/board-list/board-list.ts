import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {BoardService} from "../../../services/board-service";

@Component({
	moduleId: module.id,
	selector: "board-list",
	templateUrl: "board-list.html",
	styleUrls: ["board-list.css"]
})
export class BoardList {
	boards = [];
	constructor(private boardService: BoardService) {
		boardService.getBoards().then(res => {
			this.boards = res.json();
		});
	}
};