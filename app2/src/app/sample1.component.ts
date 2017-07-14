import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { AltControlService } from "../alt/alt-control.service";
import { AppHttpService } from "./app.http-service";

@Component({
    selector: 'sample1',
    templateUrl: './sample1.component.html',
    providers:[AltControlService]
})
export class Sample1Component implements OnInit {
    form: FormGroup;
    payload='';
    formId='';
    alts: any[];
    constructor(private altHttpService:AppHttpService, private altControl: AltControlService){ }

    ngOnInit(){
    }

    getForm(){
        this.altHttpService.getFormJSON(this.formId)
            .subscribe(response=>{
                this.alts=this.altControl.createAlts(response.responseList[0].formList[0].componentList);
                this.form = this.altControl.toFormGroup(this.alts);
            })
    }
}