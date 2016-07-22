import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from '@angular/router';
import {PostComponent} from "./post/post";
import {BoardService} from "../../../services/board-service";
import {PostingFormComponent} from "../posting-form/posting-form";

@Component({
	directives: [PostComponent, PostingFormComponent],
	selector: "thread-view",
	templateUrl: "thread-view.html",
	styleUrls: ["thread-view.css"]
})
export class ThreadViewComponent {
	private posts = [];
	private threadId: number;
	private boardName: string;

	private sub: any;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private boardService: BoardService) {}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.threadId = params["threadId"];
			this.boardName = params["boardName"];
			this.boardService.getThreadPosts(params["threadId"]).then(posts => {
				this.posts = posts;
			});
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	onPostCreated(newPost) {
		this.posts = [...this.posts, newPost];
	}

	onPostingError(err) {
		console.log("Posting error:", err);
	}
};