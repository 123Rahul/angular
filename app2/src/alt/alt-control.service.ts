import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AltBase } from "../alt/alt-base";
import { AltTextbox } from "../alt/alt-textbox";
import { AltTextarea } from "../alt/alt-textarea";
import { AltDropdown } from "../alt/alt-dropdown";

@Injectable()
export class AltControlService {
    constructor(){ }

    toFormGroup(alts: AltBase<any>[]){
        let group: any = {};
        alts.forEach(alt=>{
            group[alt.key]=new FormControl(alt.value || '', Validators.required);
        });
        return new FormGroup(group);
    }

    createAlts(response: any[]){
        let alts=[];
        let alt;
        for(var i=0;i<response.length;i++){
            if(response[i].type=="dropdown"){
                alt=new AltDropdown({
                    "key":response[i].key,
                    "label":response[i].label,
                    "order":response[i].order,
                    "event":response[i].event,
                    "options":response[i].options
                })
            } else if(response[i].type=="textbox"){
                alt=new AltTextbox({
                    "key":response[i].key,
                    "label":response[i].label,
                    "order":response[i].order,
                    "event":response[i].event,
                    "value":response[i].value
                })
            }
            alts.push(alt);
        }

        return alts.sort(function(a,b){return a.order-b.order});
    }

    toValidators(validations: any[]){
        
    }
}