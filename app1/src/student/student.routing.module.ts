import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StudentListComponent } from "./student.list.component";
import { StudentDetailComponent } from "./student.detail.component";
import { StudentCreateComponent } from "./student.create.component";

const studentRoutes = [
    { path: 'student/list', component: StudentListComponent },
    { path: 'student/detail', component: StudentDetailComponent },
    { path: 'student/create', component: StudentCreateComponent},
    { path: 'student',   redirectTo: '/student/list', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(studentRoutes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }
