import {Component, OnInit} from '@angular/core';
import {ColyseusWrapperService} from "../../../services/colyseus-client/colyseus-wrapper.service";
import {Router} from "@angular/router";
import {GameManagerService} from "../../../services/colyseus-client/game-manager.service";
import {Block} from "../../../services/blockchain.class";

@Component({
    selector: 'post-puzzle-page',
    templateUrl: './post-puzzle-page.component.html',
    styleUrls: ['./post-puzzle-page.component.scss']
})
export class PostPuzzlePageComponent implements OnInit {

    validProposedBlocks: {from: string, block: Block}[];

    constructor(private _gameManager: GameManagerService, private _router: Router) {

    }

    ngOnInit() {
        this.validProposedBlocks = this._gameManager.getValidProposedBlocks();
    }
}
