import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AltBase } from "./alt-base";

@Injectable()
export class AltControlService {
    constructor(){ }

    // create angular form group using alts
    toFormGroup(alts: AltBase<any>[]){
        let group: any = {};

        alts.forEach(alt=>{
            // this will change when validators come into picture
            group[alt.key]=new FormControl(alt.value || '', Validators.required);
        });
        return new FormGroup(group);
    }

    // for getting validation from alt and create angular validator array
    toValidators(validations: any[]){
        
    }
}