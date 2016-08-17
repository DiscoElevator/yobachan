import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {App} from "./app";
import {routes, appRoutingProviders} from './routes';

@NgModule({
	declarations: [App],
	imports: [BrowserModule, routes],
	bootstrap: [App],
	providers: [appRoutingProviders]
})
export class AppModule {}