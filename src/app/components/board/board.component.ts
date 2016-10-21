import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {BoardService} from "../../services/board.service";

@Component({
	selector: "board",
	templateUrl: "board.html"
})
export class BoardComponent implements OnInit, OnDestroy {
	private board;
	private threads = [];

	private sub: any;

	constructor(
		private route: ActivatedRoute,
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

	onPostCreated(newPost) {
		if (newPost.isOpPost) {
			this.threads.push(newPost);
		}
	}

	onPostingError(err) {
		console.log("Posting error:", err);
	}
};