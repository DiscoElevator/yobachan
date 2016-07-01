import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from '@angular/router';
import {PostComponent} from "./post/post";
import {BoardService} from "../../../services/board-service";

@Component({
	directives: [PostComponent],
	selector: "thread-view",
	templateUrl: "thread-view.html",
	styleUrls: ["thread-view.css"]
})
export class ThreadViewComponent {
	private posts = [];

	private sub: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private boardService: BoardService) {}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.boardService.getThreadPosts(params["threadId"]).then(posts => {
				this.posts = posts;
			});
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
};