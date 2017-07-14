import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AltBase } from "../alt/alt-base";
import { AltTextbox } from "../alt/alt-textbox";
import { AltTextarea } from "../alt/alt-textarea";
import { AltDropdown } from "../alt/alt-dropdown";
import { AltCheckboxGroup } from "../alt/alt-checkbox-group";
import { AltRadioGroup } from "../alt/alt-radio-group";

@Injectable()
export class AltControlService {
    constructor(){ }

    toFormGroup(alts: AltBase<any>[]){
        let group: any = {};
        alts.forEach(alt=>{
            group[alt.id]=new FormControl(alt.value || '');
        });
        return new FormGroup(group);
    }

    createAlts(response: any[]){
        let alts=[];
        let alt;
        for(var i=0;i<response.length;i++){
            if(response[i].controlType=="TEXTAREA"){
                alt=new AltTextarea(response[i])
            } else if(response[i].controlType=="TEXTFIELD"){
                alt=new AltTextbox(response[i])
            } else if(response[i].controlType=="DROPDOWN"){
                alt=new AltDropdown(response[i])
            } else if(response[i].controlType=="CHECKBOX_GROUP"){
                alt=new AltCheckboxGroup(response[i])
            } 
            alts.push(alt);
        }

        return alts;
    }

    toValidators(validations: any[]){
        
    }
}