import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EmployeeListComponent } from "./employee.list.component";
import { EmployeeDetailComponent } from "./employee.detail.component";
import { EmployeeCreateComponent } from "./employee.create.component";

const employeeRoutes = [
    { path: 'employee/list', component: EmployeeListComponent },
    { path: 'employee/detail', component: EmployeeDetailComponent },
    { path: 'employee/create', component: EmployeeCreateComponent},
    { path: 'employee',   redirectTo: '/employee/list', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(employeeRoutes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
