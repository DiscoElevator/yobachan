import {Component, Input} from "@angular/core";

@Component({
	selector: "thread",
	templateUrl: "thread.html",
	styleUrls: ["thread.css"]
})
export class ThreadComponent {
	@Input() thread;
};