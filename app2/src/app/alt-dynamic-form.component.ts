import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { AltBase } from "./alt-base";

@Component({
    selector: 'alt-df',
    templateUrl: './alt-dynamic-form.component.html'
})
export class AltDynamicFormComponent implements OnInit {
    @Input() alt: AltBase<any>;
    @Input() form: FormGroup;

    constructor(){
    }
    ngOnInit(){
        console.log(this.form);
    }

    get isValid(){
        return this.form.controls[this.alt.key].valid;
    }
}
