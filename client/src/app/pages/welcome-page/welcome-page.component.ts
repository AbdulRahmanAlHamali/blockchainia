import { Component } from '@angular/core';
import {ColyseusWrapperService} from "../../../services/colyseus-client/colyseus-wrapper.service";
import {Router} from "@angular/router";

@Component({
    selector: 'welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

    constructor(private _colyseusWrapper: ColyseusWrapperService, private _router: Router) {

    }

    joinRoom() {
        this._colyseusWrapper.joinRoom().subscribe(() => {
            this._router.navigate(['blockchainia/waiting-page']);
        });
    }
}
