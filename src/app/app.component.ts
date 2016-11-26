import {Component, ViewEncapsulation} from "@angular/core";

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: "app",
	template: `<top></top>
<router-outlet></router-outlet>`,
	styleUrls: ["./app.component.css"]
})
export class AppComponent {};