import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from '@angular/router';
import {BoardService} from "../../services/board-service";
import {ThreadList} from "./thread-list/thread-list";

@Component({
	directives: [ThreadList],
	selector: "board",
	template: `<div>{{board.name}}</div><thread-list [threads]="threads"></thread-list>`
})
export class Board {
	private board = {};
	private threads = [];

	private sub: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private boardService: BoardService) {}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			let boardName = params["boardName"];
			this.boardService.getBoard(boardName).then(board => {
				this.board = board;
				this.boardService.getBoardThreads(boardName).then(threads => {
					this.threads = threads;
				});
			});
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
};