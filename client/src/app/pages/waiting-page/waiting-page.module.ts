import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import {WaitingPageComponent} from "./waiting-page.component";
import {routing} from "./waiting-page.routing";

@NgModule({
    declarations: [
        WaitingPageComponent
    ],
    imports: [
        RouterModule,
        routing
    ],
    providers: []
})
export class WaitingPageModule { }
