import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { AltBase } from "./alt-base";
import { AltControlService } from "./alt-control.service";

@Component({
    selector: 'sample1',
    templateUrl: './sample1.component.html',
    providers:[AltControlService]
})
export class Sample1Component implements OnInit {
    @Input() alts: AltBase<any>[];
    form: FormGroup;
    payload='';

    constructor(private altControl: AltControlService){ }

    ngOnInit(){
        this.form = this.altControl.toFormGroup(this.alts);
    }

    submit(){
        this.payload=JSON.stringify(this.form.value);
    }
}