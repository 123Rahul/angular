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
    alts: any[];
    constructor(private altHttpService:AppHttpService, private altControl: AltControlService){ }

    ngOnInit(){
        this.altHttpService.getSample1Data()
            .subscribe(response=>{
                this.alts=this.altControl.createAlts(response);
                this.form = this.altControl.toFormGroup(this.alts);
            })
    }

    submit(){
        this.payload=JSON.stringify(this.form.value);
    }
}