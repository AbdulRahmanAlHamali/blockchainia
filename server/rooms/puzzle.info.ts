import * as hash from 'string-hash';
import {DATABASE} from "./trivia.db";

export class PuzzleInfo {
    private _puzzleKey: number;

    constructor() {
        this._puzzleKey = Math.ceil(Math.random() * 100000);
    }

    getQuestionFor(data) {
        let stringData = JSON.stringify(data);
        let index = hash(stringData + this._puzzleKey.toString()) % DATABASE.length;

        let question = DATABASE[index];

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
}