import { AltBase } from "./alt-base";

export class AltDropdown extends AltBase<string> {
    controlType = 'dropdown';
    options: {key:string, value:string}[]=[];
    
    constructor(options:{}={}){
        super(options);
        this.options=options['options']||[];
    }
}