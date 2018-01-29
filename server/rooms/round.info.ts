
export class RoundInfo {
    remainingAttacks: string[];
    done: boolean;

    constructor(users: string[]) {
        this.done = false;
        this.remainingAttacks = users.slice();
    }

    createAttack(attacker: string, attacked: string) {
        let attackDamage = Math.floor(Math.random() * 20);

        this.remainingAttacks.splice(this.remainingAttacks.indexOf(attacker), 1);

        if (this.remainingAttacks.length === 0) {
            this.done = true;
        }

        return {
            attacker: attacker,
            attacked: attacked,
            damage: attackDamage
        }
    }
}