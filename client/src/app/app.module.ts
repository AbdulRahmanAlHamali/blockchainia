import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {ColyseusWrapperService} from "../services/colyseus-client/colyseus-wrapper.service";
import {GameManagerService} from "../services/colyseus-client/game-manager.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
