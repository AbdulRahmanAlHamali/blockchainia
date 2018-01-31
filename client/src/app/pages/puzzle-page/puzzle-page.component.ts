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
    question;
    answer: number;

    constructor(private _gameManager: GameManagerService, private _router: Router) {

    }

    submit() {
        this._gameManager.submitAnswer({
            question: this.question.question,
            questionIndex: this.question.index,
            answer: this.answer
        })
    }

    ngOnInit() {
        this.transactions = this._gameManager.getCurrentBlockTransactions();
        this._gameManager.getPuzzle().subscribe(question => this.question = question);
        this._gameManager.getPuzzleDoneObservable().subscribe((inPuzzle) => {
            if (inPuzzle === false) {
                this._router.navigate(['blockchainia/post-puzzle-page']);
            }
        })
    }
}
