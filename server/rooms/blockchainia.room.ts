import { Room } from "colyseus";
import {RoundInfo} from "./round.info";
import {PuzzleInfo} from "./puzzle.info";

export class BlockChainiaRoom extends Room {
    /**
     * The number of players in each lobby
     * @type {number}
     */
    maxClients = 5;
    round: RoundInfo;
    puzzle: PuzzleInfo;
    clientInfo: {[clientId: string]: {userName: string, privateKey: number}};

    onInit() {
        this.clientInfo = {};
        this.setState({
            started: false,
            users: [],
            inRound: false,
            inPuzzle: false,
            inPostPuzzle: false
        });
    }

    onJoin(client) {
    }

    onLeave(client) {

    }

    onMessage(client, data) {
        if (data.id) {
            // The client is asking a question
            this.handleQuestion(client, data);
        }

        if (data.ready) {
            this.state.users.push('guest' + Math.ceil(Math.random() * 999));
            this.clientInfo[client.sessionId] = {
                userName: this.state.users[this.state.users.length - 1],
                privateKey: Math.ceil(Math.random() * 100000)
            };

            if (this.state.users.length === this.maxClients) {
                setTimeout(() => {
                    this.state.started = true;
                    this.round = new RoundInfo(this.state.users);
                    this.state.inRound = true;
                }, 1000);
            }
        }

        if (data.attack && this.state.inRound) {
            let attack = this.round.createAttack(this.clientInfo[client.sessionId].userName, data.attack.attacked);
            this.broadcast({
                attack: attack
            });

            if (this.round.done) {
                this.state.inRound = false;
                this.state.inPuzzle = true;
                this.puzzle = new PuzzleInfo(this.state.users);
            }
        }

        if (data.proposedBlock && this.state.inPuzzle) {
            this.broadcast({
                proposedBlock: this.puzzle.proposeBlock(this.clientInfo[client.sessionId].userName, data.proposedBlock)
            });

            if (this.puzzle.done) {
                this.state.inPuzzle = false;
                this.state.inPostPuzzle = true;
                this.broadcast({
                    puzzleKey: this.puzzle.puzzleKey
                })
            }
        }
    }

    handleQuestion(client, data) {
        let response = {
            id: data.id,
            result: undefined
        };

        if (data.method === 'get-waiting-state') {
            response.result = {
                users: this.state.users,
                started: this.state.started
            };
        }

        if (data.method === 'whoami') {
            response.result = this.clientInfo[client.sessionId];
        }

        if (data.method === 'get-puzzle' && this.state.inPuzzle) {
            response.result = this.puzzle.getQuestionFor(data.params.transactions);
        }

        this.send(client, response);
    }

    onDispose() {

    }
}