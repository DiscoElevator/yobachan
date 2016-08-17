import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {App} from "./app";
import {routes, appRoutingProviders} from './routes';
import {BoardService} from "./services/board-service";
import {Board} from "./components/board/board";
import {Dashboard} from "./components/dashboard/dashboard";

@NgModule({
	declarations: [App, Board, Dashboard],
	imports: [BrowserModule, routes, FormsModule],
	bootstrap: [App],
	providers: [appRoutingProviders, BoardService]
})
export class AppModule {}