import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MY_DYNAMIC_FORM_MODEL } from "./my-dynamic-form.model";
import { DynamicFormControlModel, DynamicFormService } from "@ng2-dynamic-forms/core";

@Component({
    selector:"df",
    template: `<form [formGroup]="formGroup">
                <dynamic-form-basic-control *ngFor="let controlModel of formModel" 
                [group]="formGroup"
                [model]="controlModel"></dynamic-form-basic-control>
            </form>`
})
export class MyDynamicFormComponent implements OnInit {

    formModel: DynamicFormControlModel[] = MY_DYNAMIC_FORM_MODEL;
    formGroup: FormGroup;

    constructor(private formService: DynamicFormService) {}

    ngOnInit() {
        this.formGroup = this.formService.createFormGroup(this.formModel);
    }
}