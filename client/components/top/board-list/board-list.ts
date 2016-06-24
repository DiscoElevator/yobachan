import {Component} from "@angular/core";

@Component({
	moduleId: module.id,
	selector: "board-list",
	templateUrl: "board-list.html",
	styleUrls: ["board-list.css"]
})
export class BoardList {
	boards = [{
		name: "/test1"
	}, {
		name: "/test2"
	}]
};