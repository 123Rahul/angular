import { AltBase } from "./alt-base";

export class AltTextbox extends AltBase<string> {
    controlType = 'textbox';
    type: string;
    
    constructor(options:{}={}){
        super(options);
        this.type = options['type'] || '';
    }
}