import { AltBase } from "./alt-base";

export class AltTextarea extends AltBase<string> {
    controlType = 'textarea';
    
    constructor(options:{}={}){
        super(options);
    }
}