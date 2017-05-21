import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmployeeRoutingModule } from "./employee.routing.module";

import { EmployeeListComponent } from "./employee.list.component";
import { EmployeeDetailComponent } from "./employee.detail.component";
import { EmployeeCreateComponent } from "./employee.create.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EmployeeRoutingModule
    ],
    declarations: [
        EmployeeListComponent,
        EmployeeDetailComponent,
        EmployeeCreateComponent
    ],
    providers: []
})
export class EmployeeModule { }