import {Component} from "@angular/core";
import {BoardList} from "./board-list/board-list";

@Component({
	moduleId: module.id,
	selector: "top",
	templateUrl: "top.html",
	styleUrls: ["top.css"],
	directives: [BoardList]
})
export class Top {};