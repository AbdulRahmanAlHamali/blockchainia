
export type AttackInfo = {
    attacker: string;
    attacked: string;
    damage: number;
}

export type Block = {
    transactions: AttackInfo[];
    answer: {
        question: string;
        questionIndex: number;
        answer: number;
    }
    roundKey?: number;
}

export class Blockchain {
    private _blocks: Block[];

    constructor() {
        this._blocks = [];
    }

    addBlock(block: Block) {
        this._blocks.push(block);
    }

}