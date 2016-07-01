import {provideRouter, RouterConfig} from "@angular/router";
import {Board} from "./components/board/board";
import {Dashboard} from "./components/dashboard/dashboard";
import {BoardRoutes} from "./components/board/board-routes";

export const routes: RouterConfig = [
	...BoardRoutes,
	{path: "", component: Dashboard, terminal: true},
	{path: ":boardName", component: Board}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];