import {Component, ViewEncapsulation} from "@angular/core";

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: "app",
	template: `<top></top>
<router-outlet></router-outlet>
<style>
body {
	background-color: #faebd7;
}
</style>`
})
export class App {};