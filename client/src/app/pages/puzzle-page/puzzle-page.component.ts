import {Component, OnInit} from '@angular/core';
import {ColyseusWrapperService} from "../../../services/colyseus-client/colyseus-wrapper.service";
import {Router} from "@angular/router";
import {GameManagerService} from "../../../services/colyseus-client/game-manager.service";
import {AttackInfo} from "../../../services/blockchain.class";

@Component({
    selector: 'puzzle-page',
    templateUrl: './puzzle-page.component.html',
    styleUrls: ['./puzzle-page.component.scss']
})
export class PuzzlePageComponent implements OnInit {

    transactions: AttackInfo[];

    constructor(private _gameManager: GameManagerService, private _router: Router) {

    }

    ngOnInit() {
        this.transactions = this._gameManager.getCurrentBlockTransactions();
    }
}
