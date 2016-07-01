import "reflect-metadata";
import "rxjs/Rx";

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './routes';
import { App } from './app';

bootstrap(App, [APP_ROUTER_PROVIDERS, disableDeprecatedForms(), provideForms()]);