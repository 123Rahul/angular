import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes = [
    { path: 'employee', loadChildren: 'employee/employee.module#EmployeeModule' },
    { path: 'student', loadChildren: 'student/student.module#StudentModule'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
