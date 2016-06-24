import {Component} from "@angular/core";
import {Top} from "client/components/top/top";

@Component({
	selector: "app",
	directives: [Top],
	template: `<top></top>
	<div>Some text</div>
<style>
body {
	background-color: #faebd7;
}
</style>`
})
export class App {};