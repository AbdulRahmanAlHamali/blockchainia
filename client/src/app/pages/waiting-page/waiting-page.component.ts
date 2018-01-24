import {Component, OnInit} from '@angular/core';
import {ColyseusWrapperService} from "../../../services/colyseus-client/colyseus-wrapper.service";
import {Router} from "@angular/router";

@Component({
    selector: 'waiting-page',
    templateUrl: './waiting-page.component.html',
    styleUrls: ['./waiting-page.component.scss']
})
export class WaitingPageComponent implements OnInit {

    currentNumber: number = 0;

    constructor(private _colyseusWrapper: ColyseusWrapperService, private _router: Router) {

    }

    ngOnInit() {
        this._colyseusWrapper.getMessageReceivedObservable('currentClients').subscribe((currentNumber) => {
            this.currentNumber = currentNumber;
        });
        this._colyseusWrapper.getMessageReceivedObservable('started').subscribe((started) => {
            if (started) {
                this._router.navigate(['blockchainia/battleground-page'])
            }
        })
    }
}
