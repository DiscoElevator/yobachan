import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from '@angular/router';
import {BoardService} from "../../services/board-service";

@Component({
	moduleId: module.id,
	selector: "board",
	template: "<div>{{board.name}}</div>"
})
export class Board {
	private board = {};

	private sub: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private boardService: BoardService) {}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			let boardName = params["boardName"];
			this.boardService.getBoard(boardName).then(board => {
				console.log(board);
				this.board = board;
			});
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
};