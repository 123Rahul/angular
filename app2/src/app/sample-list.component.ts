import { Component, OnInit } from "@angular/core";
import { AltHttpService } from "./alt-http.service";

@Component({
    selector: 'sample-list',
    template: `
        <div>
            <h2>samples</h2>
            <sample1 [alts]="alts" *ngIf="alts"></sample1>
        </div>
    `
})
export class SampleListComponent implements OnInit {
    alts: any[];
    constructor(private altHttpService:AltHttpService){ }
    ngOnInit(){
        // this.altHttpService.getSample1Data()
        //     .subscribe(
        //         alts=>this.alts=alts,
        //         err=>{
        //             console.log(err);
        //             this.alts=[{"key":"brave","label":"Bravery Rating","options":[{"key":"solid","value":"Solid"},{"key":"great","value":"Great"},{"key":"good","value":"Good"},{"key":"unproven","value":"Unproven"}],"order":3},{"key":"firstName","label":"First name","value":"Bombasto","required":true,"order":1},{"key":"emailAddress","label":"Email","type":"email","order":2}];
        //         }
        //     )
        this.alts=this.altHttpService.getAlts();
    }
}