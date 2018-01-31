import * as hash from 'string-hash';
import {DATABASE} from "./trivia.db";

export class PuzzleInfo {
    remainingBlocks: string[];
    done: boolean;
    private _puzzleKey: number;
    get puzzleKey() {
        return this._puzzleKey;
    }

    constructor(users: string[]) {
        this.done = false;
        this.remainingBlocks = users.slice();
        this._puzzleKey = Math.ceil(Math.random() * 100000);
    }

    getQuestionFor(data) {
        let stringData = JSON.stringify(data);
        let index = hash(stringData + this._puzzleKey.toString());

        let question = DATABASE[index % DATABASE.length];

        let reorderedOptions = question.options.slice();

        let desiredAnswerIndex = hash(question.question + this._puzzleKey.toString()) % 4;

        if (desiredAnswerIndex !== question.answer) {
            let otherOption = reorderedOptions[desiredAnswerIndex];
            reorderedOptions[desiredAnswerIndex] = reorderedOptions[question.answer];
            reorderedOptions[question.answer] = otherOption;
        }

        return {
            question: question.question,
            index: index,
            options: reorderedOptions
        }
    }

    proposeBlock(proposer: string, proposedBlock) {
        this.remainingBlocks.splice(this.remainingBlocks.indexOf(proposer), 1);

        if (this.remainingBlocks.length === 0) {
            this.done = true;
        }

        return {
            from: proposer,
            block: proposedBlock
        }
    }
}