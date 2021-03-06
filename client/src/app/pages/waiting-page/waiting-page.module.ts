import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import {WaitingPageComponent} from "./waiting-page.component";
import {routing} from "./waiting-page.routing";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        WaitingPageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        routing
    ],
    providers: []
})
export class WaitingPageModule { }
