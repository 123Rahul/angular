import { AltBase } from "./alt-base";
import { AltOption } from "./alt-option";

export class AltRadioGroup extends AltBase<string> {
    options: AltOption[];
    
    constructor(options:{}={}){
        super(options);
        this.options=options['options']||[];
    }
}