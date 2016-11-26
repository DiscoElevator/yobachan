import {Component, Input} from "@angular/core";

@Component({
	selector: "post",
	templateUrl: "post.html",
	styleUrls: ["post.css"]
})
export class PostComponent {
	@Input() post;
};