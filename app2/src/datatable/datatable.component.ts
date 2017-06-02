import { Component, Input, OnInit } from "@angular/core";
import { DatatableService } from "./datatable.service";

@Component({
    selector: 'data-table',
    templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {
    @Input() url: string;
    @Input() itemsPerPage: number;
    metadata: any[];
    data: any[];

    constructor(private datatableService: DatatableService){}

    ngOnInit(){
        this.datatableService.getData(this.url, {})
            .subscribe((response)=>{
                this.data=response;
            })
    }
}