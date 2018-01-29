import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {ColyseusWrapperService} from "../services/colyseus-client/colyseus-wrapper.service";
import {GameManagerService} from "../services/colyseus-client/game-manager.service";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        routing
    ],
    providers: [
        ColyseusWrapperService,
        GameManagerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
