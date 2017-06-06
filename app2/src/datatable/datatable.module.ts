import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { DatatableComponent } from "./datatable.component";
import { DatatableService } from "./datatable.service";

@NgModule({
    imports: [CommonModule, HttpModule, FormsModule],
    declarations:[DatatableComponent],
    providers: [DatatableService],
    exports: [DatatableComponent]
})
export class Datatable{}