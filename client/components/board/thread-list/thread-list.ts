import {Component, Input} from "@angular/core";
import {Thread} from "./thread/thread";

@Component({
	directives: [Thread],
	selector: "thread-list",
	templateUrl: "thread-list.html",
	styleUrls: ["thread-list.css"]
})
export class ThreadList {
	@Input() threads = [];
};