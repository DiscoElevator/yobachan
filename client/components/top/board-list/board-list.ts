import {Component} from "@angular/core";

@Component({
	selector: "board-list",
	templateUrl: "client/components/top/board-list/board-list.html",
	styleUrls: ["client/components/top/board-list/board-list.css"]
})
export class BoardList {
	boards = [{
		name: "/test1"
	}, {
		name: "/test2"
	}]
};