import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {CommonModule} from "@angular/common";
import {PuzzlePageComponent} from "./puzzle-page.component";
import {routing} from "./puzzle-page.routing";

@NgModule({
    declarations: [
        PuzzlePageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        routing
    ],
    providers: []
})
export class PuzzlePageModule{ }
