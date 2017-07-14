import { AltBase } from "./alt-base";
import { AltOption } from "./alt-option";

export class AltCheckboxGroup extends AltBase<string> {
    options: AltOption[];
    
    constructor(options:{}={}){
        super(options);
        this.options=options['options']||[];
    }
}