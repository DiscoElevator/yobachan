import {Routes, RouterModule} from "@angular/router";
import {Board} from "./components/board/board";
import {Dashboard} from "./components/dashboard/dashboard";
import {BoardRoutes} from "./components/board/board-routes";

export const appRoutes: Routes = [
	...BoardRoutes,
	{path: "", component: Dashboard, terminal: true},
	{path: ":boardName", component: Board}
];

export const appRoutingProviders: any[] = [

];

export const routes = RouterModule.forRoot(appRoutes);