
export type GrantInfo = {
    grantedName: string;
    grantedAmount: number;
}

export type DonationInfo = {
    donatorName: string;
    donateeName: string;
    donatedAmount: number;
}

export type Transaction = {
    type: string,
    info: GrantInfo | DonationInfo
}

export type Block = {
    transactions: Transaction[];
    answer: {
        question: string;
        questionIndex: number;
        answer: number;
    } | null;
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

    getScores(): {[name: string]: number} {
        let scores = {};
        this._blocks.forEach((block) => {
            block.transactions.forEach(transaction => {
                if (transaction.type === 'grant') {
                    let grantInfo: GrantInfo = <GrantInfo>transaction.info;
                    if (scores[grantInfo.grantedName] === undefined) {
                        scores[grantInfo.grantedName] = 0;
                    }
                    scores[grantInfo.grantedName] += grantInfo.grantedAmount;
                } else if (transaction.type === 'donation') {
                    let donationInfo: DonationInfo = <DonationInfo>transaction.info;
                    scores[donationInfo.donatorName] -= donationInfo.donatedAmount;
                    scores[donationInfo.donateeName] += donationInfo.donatedAmount;
                }
            })
        });

        return scores;
    }

}