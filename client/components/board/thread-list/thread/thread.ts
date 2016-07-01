import {Component, Input} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	directives: [ROUTER_DIRECTIVES],
	selector: "thread",
	templateUrl: "thread.html",
	styleUrls: ["thread.css"]
})
export class Thread {
	@Input() thread;
};