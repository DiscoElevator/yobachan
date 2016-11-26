import { Routes, RouterModule } from '@angular/router';
import {BoardComponent} from "./components";
import {DashboardComponent} from "./components";
import {BoardRoutes} from "./components/board/board-routes";

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
	...BoardRoutes,
	{path: "", component: DashboardComponent},
	{path: ":boardName", component: BoardComponent}
];
