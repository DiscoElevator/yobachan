import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {BoardService} from "../../../services/board.service";

@Component({
	selector: "thread-view",
	templateUrl: "thread-view.html",
	styleUrls: ["thread-view.css"]
})
export class ThreadViewComponent implements OnInit, OnDestroy {
	private posts = [];
	private threadId: number;
	private boardName: string;

	private routeParamsSub: any;

	constructor(
		private route: ActivatedRoute,
		private boardService: BoardService) {}

	ngOnInit() {
		this.routeParamsSub = this.route.params.subscribe(params => {
			this.threadId = params["threadId"];
			this.boardName = params["boardName"];
			this.boardService.getThreadPosts(params["threadId"]).then(posts => {
				this.posts = posts;
			});
		});
	}

	ngOnDestroy() {
		this.routeParamsSub.unsubscribe();
	}

	onPostCreated(newPost) {
		let lastPostId = this.posts[this.posts.length - 1].id;
		this.boardService.getRecentPosts(this.threadId, lastPostId).then(posts => {
			this.posts = [...this.posts, ...posts];
		});
	}

	onPostingError(err) {
		console.log("Posting error:", err);
	}
};