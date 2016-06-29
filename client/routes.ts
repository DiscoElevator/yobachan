import {provideRouter, RouterConfig} from "@angular/router";
import {Board} from "./components/board/board";
import {Dashboard} from "./components/dashboard/dashboard";

export const routes: RouterConfig = [
	{path: "", component: Dashboard, terminal: true},
	{path: ":boardName", component: Board}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];