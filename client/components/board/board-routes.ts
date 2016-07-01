import {RouterConfig} from "@angular/router";
import {ThreadViewComponent} from "./thread-view/thread-view";

export const BoardRoutes: RouterConfig = [
	{path: ":boardName/:threadId", component: ThreadViewComponent}
];