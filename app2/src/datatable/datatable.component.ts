import { Component, Input, OnInit } from "@angular/core";
import { DatatableService } from "./datatable.service";

@Component({
    selector: 'data-table',
    templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {
    @Input() headerUrl: string;
    @Input() listUrl: string;
    length: number;
    offset: number;
    header: any[];
    data: any;
    lengthList = [
        {key:5,value:5},
        {key:10,value:10},
        {key:15,value:15},
    ]

    constructor(private datatableService: DatatableService){}

    ngOnInit(){
        this.length=5;
        this.offset=0;
        this.datatableService.getHeaderData(this.headerUrl)
            .subscribe((response)=>{
                this.header = response.meta;
                this.datatableService.getData(this.listUrl, this.length, this.offset)
                    .subscribe((response)=>{
                        this.data=response.data;
                    })
            })
    }

    next(){
        this.offset=this.offset+this.length;
        this.getDataAndUpdateUI();
    }

    previous(){
        this.offset=this.offset-this.length;
        this.getDataAndUpdateUI();
    }

    getDataAndUpdateUI(){
        this.datatableService.getData(this.listUrl, this.length, this.offset)
            .subscribe((response)=>{
                this.data=response.data;
            })
    }
}