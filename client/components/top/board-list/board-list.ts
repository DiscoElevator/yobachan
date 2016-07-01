import {Component} from "@angular/core";
import {Http} from "@angular/http";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {BoardService} from "../../../services/board-service";
import {BoardNamePipe} from "../../../pipes/board-name-pipe";

@Component({
	moduleId: module.id,
	directives: [ROUTER_DIRECTIVES],
	pipes: [BoardNamePipe],
	selector: "board-list",
	templateUrl: "board-list.html",
	styleUrls: ["board-list.css"]
})
export class BoardList {
	boards = [];
	constructor(private boardService: BoardService) {
		boardService.getBoards().then(boards => {
			this.boards = boards;
		});
	}
};