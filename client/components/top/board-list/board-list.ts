import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {BoardListService} from "./board-list-service.ts";

@Component({
	moduleId: module.id,
	providers: [BoardListService],
	selector: "board-list",
	templateUrl: "board-list.html",
	styleUrls: ["board-list.css"]
})
export class BoardList {
	boards = [];
	constructor(private boardListService: BoardListService) {
		boardListService.getBoards().then(res => {
			this.boards = res.json();
		});
	}
};