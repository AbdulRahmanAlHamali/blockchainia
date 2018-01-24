import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {BattlegroundPageComponent} from "./battleground-page.component";
import {routing} from "./battleground-page.routing";

@NgModule({
    declarations: [
        BattlegroundPageComponent
    ],
    imports: [
        RouterModule,
        routing
    ],
    providers: []
})
export class BattlegroundPageModule{ }
