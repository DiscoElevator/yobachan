import {Component} from "@angular/core";
import {BoardList} from "./board-list/board-list";

@Component({
	selector: "top",
	templateUrl: "client/components/top/top.html",
	styleUrls: ["client/components/top/top.css"],
	directives: [BoardList]
})
export class Top {};