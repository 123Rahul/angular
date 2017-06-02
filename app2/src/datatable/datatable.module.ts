import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { DatatableComponent } from "./datatable.component";
import { DatatableService } from "./datatable.service";

@NgModule({
    imports: [HttpModule],
    declarations:[DatatableComponent],
    providers: [DatatableService],
    exports: [DatatableComponent]
})