import {Component, ViewEncapsulation} from "@angular/core";
import { HTTP_PROVIDERS } from '@angular/http';
import {BoardService} from "./services/board-service"
import {Top} from "./components/top/top";

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: "app",
	directives: [Top],
	providers: [HTTP_PROVIDERS, BoardService],
	template: `<top></top>
	<div>Some text</div>
<style>
body {
	background-color: #faebd7;
}
</style>`
})
export class App {};