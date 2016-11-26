import {Component, Input} from "@angular/core";

@Component({
	selector: "thread-list",
	templateUrl: "thread-list.html",
	styleUrls: ["thread-list.css"]
})
export class ThreadListComponent {
	@Input() threads = [];
};