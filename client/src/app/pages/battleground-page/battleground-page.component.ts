import {Component, OnInit} from '@angular/core';
import {ColyseusWrapperService} from "../../../services/colyseus-client/colyseus-wrapper.service";
import {Router} from "@angular/router";
import {GameManagerService} from "../../../services/colyseus-client/game-manager.service";
import {AttackInfo} from "../../../services/blockchain.class";
import {Observable} from "rxjs/Observable";
import {state, trigger} from "@angular/animations";

@Component({
    selector: 'battleground-page',
    templateUrl: './battleground-page.component.html',
    styleUrls: ['./battleground-page.component.scss'],
    animations: [
    ]
})
export class BattlegroundPageComponent implements OnInit {

    userName: string;
    users: {name: string, xpos: number, ypos: number}[];
    transactions: AttackInfo[];

    handAngle: number = 0;

    constructor(private _gameManager: GameManagerService, private _router: Router) {

    }

    ngOnInit() {

        this.transactions = [];

        this._gameManager.whoami().subscribe((userName) => {
            this.userName = userName;

            let userNames = this._gameManager.getUsers();

            // We put our user in the 0th position
            let temp = userNames[0];
            let myUserIndex = userNames.indexOf(this.userName);
            userNames[0] = this.userName;
            userNames[myUserIndex] = temp;

            this.users = userNames.map((user, i) => {

                return {
                    name: user,
                    xpos: 40*Math.cos((Math.PI/2) + i*(2*Math.PI/5)) + 50,
                    ypos: 40*Math.sin((Math.PI/2) + i*(2*Math.PI/5)) + 50
                }
            });
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

    calculateHandAngle(event: MouseEvent, svg) {

        if (!this.users) return;

        let pt = svg.createSVGPoint();

        pt.x = event.clientX;
        pt.y = event.clientY;
        let svgP = pt.matrixTransform(svg.getScreenCTM().inverse());

        this.handAngle = (Math.atan((svgP.y - this.users[0].ypos)/(svgP.x - this.users[0].xpos)) * 180 / Math.PI);

        if (svgP.x < this.users[0].xpos) {
            this.handAngle = this.handAngle -180;
        }

        console.log(this.handAngle)
    }
}
