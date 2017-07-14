import { AltBase } from "./alt-base";

export class AltTextarea extends AltBase<string> {
    rows: number;
    placeholder: string;
    
    constructor(options:{}={}){
        super(options);
        this.rows = options['rows']||2;
        this.placeholder = options['placeholder'] || '';
    }
}