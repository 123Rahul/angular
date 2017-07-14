import { AltBase } from "./alt-base";

export class AltTextbox extends AltBase<string> {
    inputType: string;
    placeholder: string;
    
    constructor(options:{}={}){
        super(options);
        this.inputType = options['inputType'] || '';
        this.placeholder = options['placeholder'] || '';
    }
}