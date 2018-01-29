import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {CommonModule} from "@angular/common";
import {PuzzlePageComponent} from "./puzzle-page.component";
import {routing} from "./puzzle-page.routing";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        PuzzlePageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        routing
    ],
    providers: []
})
export class PuzzlePageModule{ }
