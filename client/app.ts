import {Component, ViewEncapsulation} from "@angular/core";
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { APP_ROUTER_PROVIDERS } from './routes';
import {BoardService} from "./services/board-service"
import {Top} from "./components/top/top";
import {Board} from "./components/board/board";
import {Dashboard} from "./components/dashboard/dashboard";

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: "app",
	directives: [ROUTER_DIRECTIVES, Top, Board, Dashboard],
	providers: [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, BoardService],
	template: `<top></top>
<router-outlet></router-outlet>
<style>
body {
	background-color: #faebd7;
}
</style>`
})
export class App {};