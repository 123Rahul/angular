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
        this.alts=this.altHttpService.getAlts();
    }
}