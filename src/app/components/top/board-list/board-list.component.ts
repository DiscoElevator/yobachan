import {Component} from "@angular/core";
import {BoardService} from "../../../services/board.service";

@Component({
	selector: "board-list",
	templateUrl: "board-list.html",
	styleUrls: ["board-list.css"]
})
export class BoardListComponent {
	private boards:any[] = [];

	constructor(private boardService: BoardService) {
		boardService.getBoards().then(boards => {
			this.boards = boards;
		});
	}
};