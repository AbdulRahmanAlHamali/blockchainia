import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {routing} from "./post-puzzle-page.routing";
import {PostPuzzlePageComponent} from "./post-puzzle-page.component";

@NgModule({
    declarations: [
        PostPuzzlePageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        routing
    ],
    providers: []
})
export class PostPuzzlePageModule{ }
