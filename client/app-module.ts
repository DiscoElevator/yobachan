import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {App} from "./app";
import {routes, appRoutingProviders} from './routes';

@NgModule({
	declarations: [App],
	imports: [BrowserModule, routes, FormsModule],
	bootstrap: [App],
	providers: [appRoutingProviders]
})
export class AppModule {}