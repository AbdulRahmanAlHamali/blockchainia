import { Component } from '@angular/core';
import {ColyseusWrapperService} from "../../../services/colyseus-client/colyseus-wrapper.service";
import {Router} from "@angular/router";
import {GameManagerService} from "../../../services/colyseus-client/game-manager.service";

@Component({
    selector: 'welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

    constructor(private _gameManager: GameManagerService, private _router: Router) {

    }

    joinRoom() {
        this._gameManager.run().subscribe(() => {
            this._router.navigate(['blockchainia/waiting-page']);
        });
    }
}
