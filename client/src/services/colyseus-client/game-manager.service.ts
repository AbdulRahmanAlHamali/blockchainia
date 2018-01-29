import {Injectable} from "@angular/core";
import {ColyseusWrapperService} from "./colyseus-wrapper.service";
import { Observable } from "rxjs/Rx";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {AttackInfo, Block, Blockchain} from "../blockchain.class";

interface UserInfo {
    userName: string;
    privateKey: number;
}

@Injectable()
export class GameManagerService {

    private _userInfo: UserInfo;
    private _attackSubject: ReplaySubject<AttackInfo>;
    private _blockchain: Blockchain;
    private _currentBlock: Block;

    constructor(private _colyseusWrapper: ColyseusWrapperService) {

    }

    _initSubjects() {
        this._attackSubject = new ReplaySubject();
    }

    run() {

        this._initSubjects();
        this._blockchain = new Blockchain();
        return this._colyseusWrapper.joinRoom().do(() => {
            this._colyseusWrapper.getDataObservable().subscribe((data) => {
                if (data.attack) {
                    this._attackSubject.next(data.attack);
                }
            })
        });
    }

    whoami() {
        if (this._userInfo) {
            return Observable.of(this._userInfo.userName);
        }
        return this._colyseusWrapper.askQuestion('whoami', {}).do((result) => {
            this._userInfo = {
                userName: result.userName,
                privateKey: result.privateKey
            }
        }).map((result) => result.userName);
    }

    getUsers() {
        return this._colyseusWrapper.getState().users;
    }

    getAttackObservable() {
        return this._attackSubject.asObservable();
    }

    getRoundDoneObservable() {
        return this._colyseusWrapper.getMessageReceivedObservable('inRound');
    }

    attack(user) {
        this._colyseusWrapper.send({
            attack: {
                attacked: user
            }
        });
    }

    prepareNewBlock(transactions: AttackInfo[]) {
        this._currentBlock = {
            transactions: transactions
        }
    }

    getCurrentBlockTransactions() {
        return this._currentBlock.transactions;
    }
}