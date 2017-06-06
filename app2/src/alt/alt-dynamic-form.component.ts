import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { AltBase } from "./alt-base";
import { AltEventsService } from "./alt-events.service";

@Component({
    selector: 'alt-df',
    templateUrl: './alt-dynamic-form.component.html'
})
export class AltDynamicFormComponent implements OnInit {
    @Input() alt: AltBase<any>;
    @Input() alts: AltBase<any>[];
    @Input() form: FormGroup;

    constructor(private altEventService:AltEventsService){ }
    ngOnInit(){
        if(this.alt['event']){
            this.form.controls[this.alt.key].valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .flatMap(value => 
                    this.altEventService.populate(this.form.controls["brave"], value, this.alts))
                    .subscribe(items=>{
                        this.alts.forEach(element => {
                            if(element["key"]=="brave"){
                                element["options"]=items;
                            }
                        });
                    }
                );
        }
    }

    get isValid(){
        return this.form.controls[this.alt.key].valid;
    }
}
