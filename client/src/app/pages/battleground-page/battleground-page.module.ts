import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {BattlegroundPageComponent} from "./battleground-page.component";
import {routing} from "./battleground-page.routing";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        BattlegroundPageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        routing
    ],
    providers: []
})
export class BattlegroundPageModule{ }
