export class Translate {
    source: string;
    target: string;
    input: string;
    result: string;

    constructor(source:string, target: string, input?: string, result?: string) {
        this.source = source;
        this.target = target;
        this.input = input;
        this.result = result;
    }
}
