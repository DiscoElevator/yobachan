import {Component, Input, Output, EventEmitter} from "@angular/core";
import { FORM_DIRECTIVES } from '@angular/common';
import {BoardService} from "../../../services/board-service";

@Component({
	directives: [FORM_DIRECTIVES],
	selector: "posting-form",
	templateUrl: "posting-form.html",
	styleUrls: ["posting-form.css"]
})
export class PostingFormComponent {
	@Input() threadId: number;
	@Input() boardName: string;
	@Output() onPostCreated = new EventEmitter<any>();
	@Output() onError = new EventEmitter<any>();

	private hidden: boolean = true;
	private post: any = {};
	private loadInProgress: boolean = false;

	constructor(private boardService: BoardService) {}

	toggle() {
		this.hidden = !this.hidden;
	}

	createPost() {
		this.loadInProgress = true;
		let post = this.post;
		post.boardName = this.boardName;
		post.threadId = this.threadId;
		this.boardService.post(post).then(newPost => {
			this.post = {};
			this.onPostCreated.emit(newPost);
			this.loadInProgress = false;
		}).catch(err => {
			this.loadInProgress = false;
			this.onError.emit(err);
		});
	}
};