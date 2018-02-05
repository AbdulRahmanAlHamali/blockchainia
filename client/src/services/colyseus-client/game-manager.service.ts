import {Injectable} from "@angular/core";
import {ColyseusWrapperService} from "./colyseus-wrapper.service";
import { Observable } from "rxjs/Rx";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Block, Blockchain, DonationInfo, Transaction} from "../blockchain.class";
import * as hash from 'string-hash';

interface UserInfo {
    userName: string;
    privateKey: number;
}

@Injectable()
export class GameManagerService {

    private _userInfo: UserInfo;
    private _donationSubject: ReplaySubject<DonationInfo>;
    private _proposedBlockSubject: ReplaySubject<{from: string, block: Block}>;
    private _blockchain: Blockchain;
    private _currentBlock: Block;
    private _proposedBlocks: {from: string, block: Block}[];
    private _currentPuzzleKey: number;

    constructor(private _colyseusWrapper: ColyseusWrapperService) {

    }

    _initSubjects() {
        this._donationSubject = new ReplaySubject();
        this._proposedBlockSubject = new ReplaySubject();
    }

    run() {
        this._initSubjects();
        this._blockchain = new Blockchain();
        return this._colyseusWrapper.joinRoom().do(() => {
            this._colyseusWrapper.getDataObservable().subscribe((data) => {
                if (data.donation) {
                    this._donationSubject.next(data.donation);
                }
                if (data.proposedBlock) {
                    if (!this._proposedBlocks) this._proposedBlocks = [];

                    this._proposedBlocks.push(data.proposedBlock);

                    this._proposedBlockSubject.next(data.proposedBlock);
                }
                if (data.puzzleKey) {
                    this._currentPuzzleKey = data.puzzleKey;
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

    initBlockChain() {
        this._blockchain.addBlock({
            transactions: this.getUsers().map(user => {
                return {
                    type: 'grant',
                    info: {
                        grantedName: user,
                        grantedAmount: 50
                    }
                }
            }),
            answer: null
        });
    }

    getUsers(): string[] {
        return this._colyseusWrapper.getState().users;
    }

    getDonationObservable() {
        return this._donationSubject.asObservable();
    }

    getProposedBlockObservable() {
        return this._proposedBlockSubject.asObservable();
    }

    getRoundDoneObservable() {
        return this._colyseusWrapper.getMessageReceivedObservable('inRound');
    }

    getPuzzleDoneObservable() {
        return this._colyseusWrapper.getMessageReceivedObservable('inPuzzle');
    }

    donate(user) {
        this._colyseusWrapper.send({
            donate: {
                donatee: user
            }
        });
    }

    prepareNewBlock(transactions: Transaction[]) {
        this._currentBlock = {
            transactions: transactions.concat([{
                type: 'grant',
                info: {
                    grantedName: this._userInfo.userName,
                    grantedAmount: 5
                }
            }]),
            answer: {
                question: '',
                questionIndex: -1,
                answer: -1
            }
        }
    }

    getCurrentBlockTransactions() {
        return this._currentBlock.transactions;
    }

    getPuzzle() {
        return this._colyseusWrapper.askQuestion('get-puzzle', {
            transactions: this._currentBlock.transactions
        })
    }

    getWaitingState() {
        return this._colyseusWrapper.askQuestion('get-waiting-state', {});
    }

    submitAnswer(answer: {question: string, questionIndex: number, answer: number}) {
        this._colyseusWrapper.send({
            proposedBlock: {
                transactions: this._currentBlock.transactions,
                answer: answer
            }
        });
    }

    getValidProposedBlocks() {
        return this._proposedBlocks.filter((proposedBlock) => {
            let stringData = JSON.stringify(proposedBlock.block.transactions);
            let index = hash(stringData + this._currentPuzzleKey.toString());

            if (proposedBlock.block.answer.questionIndex !== index) {
                return false;   // The question does not match the transactions
            }

            let desiredAnswerIndex = hash(proposedBlock.block.answer.question + this._currentPuzzleKey.toString()) % 4;

            if (desiredAnswerIndex !== proposedBlock.block.answer.answer) {
                return false;   // Wrong answer
            }

            return true;
        })
    }

    getScores() {
        return this._blockchain.getScores();
    }
}