import { Room } from "colyseus";

export class BlockChainiaRoom extends Room {
    /**
     * The number of players in each lobby
     * @type {number}
     */
    maxClients = 5;
    /**
     * Set to true if the game is in the round stage (where people are shooting at each other)
     */
    inRound: boolean;
    /**
     * Set to true if the game is in the puzzle stage (where people are solving the puzzle)
     */
    inPuzzle: boolean;

    onInit() {
        this.inRound = false;
        this.inPuzzle = false;
        this.setState({
            started: false,
            currentClients: 0
        });
    }

    onJoin(client) {
        this.state.currentClients++;
        if (this.state.currentClients === this.maxClients) {
            this.state.started = true;
            this.inRound = true;
        }
    }

    onLeave(client) {

    }

    onMessage(client, data) {
        if (data.attack) {
            let attackDamage = Math.random() * 20;
            this.broadcast({attacker: client, attacked: data.attacked, damage: attackDamage});
        }
    }

    onDispose() {

    }
}