import {Component, ViewEncapsulation} from "@angular/core";
import {Top} from "./components/top/top";

@Component({
	encapsulation: ViewEncapsulation.None,
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