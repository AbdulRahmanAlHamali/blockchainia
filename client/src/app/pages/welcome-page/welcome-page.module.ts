import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import {WelcomePageComponent} from "./welcome-page.component";
import {routing} from "./welcome-page.routing";

@NgModule({
    declarations: [
        WelcomePageComponent
    ],
    imports: [
        RouterModule,
        routing
    ],
    providers: []
})
export class WelcomePageModule { }
