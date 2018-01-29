import {Component, OnInit} from '@angular/core';
import {ColyseusWrapperService} from "../../../services/colyseus-client/colyseus-wrapper.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GameManagerService} from "../../../services/colyseus-client/game-manager.service";

@Component({
    selector: 'waiting-page',
    templateUrl: './waiting-page.component.html',
    styleUrls: ['./waiting-page.component.scss']
})
export class WaitingPageComponent implements OnInit {

    users: string[];

    constructor(private _colyseusWrapper: ColyseusWrapperService, private _router: Router, private _gameManager: GameManagerService) {

    }

    ngOnInit() {
        this._colyseusWrapper.askQuestion('get-waiting-state', {}).subscribe((waitingState) => {
            // If this has not already been answered.
            if (!this.users) {
                this.users = waitingState.users;
            }

            if (waitingState.started) {
                this._router.navigate(['blockchainia/battleground-page']);
            }
        });
        this._colyseusWrapper.getMessageReceivedObservable('users/:number').subscribe((newUser) => {
            setTimeout(() => {
                this.users = this._gameManager.getUsers();
            });
            // if (!this.users) {
            //     this.users = [];
            // }
            // this.users.push(newUser);
        });

        this._colyseusWrapper.getMessageReceivedObservable('started').subscribe((started) => {
            if (started) {
                this._router.navigate(['blockchainia/battleground-page']);
            }
        });
    }
}
