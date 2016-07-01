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
	private hidden = true;
	private post: any = {};

	@Input() threadId: number;
	@Input() boardName: string;
	@Output() onPostCreated = new EventEmitter<any>();

	constructor(private boardService: BoardService) {}

	toggle() {
		this.hidden = !this.hidden;
	}

	createPost() {
		let post = this.post;
		post.boardName = this.boardName;
		post.threadId = this.threadId;
		this.boardService.post(post).then(newPost => {
			this.post = {};
			this.onPostCreated.emit(newPost);
		});
	}
};