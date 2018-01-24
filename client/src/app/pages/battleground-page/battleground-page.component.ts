import {Component, OnInit} from '@angular/core';
import {ColyseusWrapperService} from "../../../services/colyseus-client/colyseus-wrapper.service";
import {Router} from "@angular/router";

@Component({
    selector: 'battleground-page',
    templateUrl: './battleground-page.component.html',
    styleUrls: ['./battleground-page.component.scss']
})
export class BattlegroundPageComponent implements OnInit {

    constructor(private _colyseusWrapper: ColyseusWrapperService, private _router: Router) {

    }

    ngOnInit() {

    }
}
