import {Component, OnInit} from '@angular/core';
import {ColyseusWrapperService} from "../../../services/colyseus-client/colyseus-wrapper.service";
import {Router} from "@angular/router";
import {GameManagerService} from "../../../services/colyseus-client/game-manager.service";
import {AttackInfo} from "../../../services/blockchain.class";

@Component({
    selector: 'battleground-page',
    templateUrl: './battleground-page.component.html',
    styleUrls: ['./battleground-page.component.scss']
})
export class BattlegroundPageComponent implements OnInit {

    userName: string;
    users: string[];
    transactions: AttackInfo[];

    constructor(private _gameManager: GameManagerService, private _router: Router) {

    }

    ngOnInit() {
        this.transactions = [];
        this.users = this._gameManager.getUsers();

        this._gameManager.whoami().subscribe((userName) => {
            this.userName = userName;
        });

        this._gameManager.getAttackObservable().subscribe((attack) => {
            this.transactions.push(attack);
        });

        this._gameManager.getRoundDoneObservable().subscribe((inRound) => {
            if (inRound === false) {
                this._gameManager.prepareNewBlock(this.transactions);
                this._router.navigate(['blockchainia/puzzle-page']);
            }
        })
    }

    attack(user: string) {
        this._gameManager.attack(user);
    }
}
