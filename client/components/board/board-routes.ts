import {Routes} from "@angular/router";
import {ThreadViewComponent} from "./thread-view/thread-view";

export const BoardRoutes: Routes = [
	{path: ":boardName/:threadId", component: ThreadViewComponent}
];