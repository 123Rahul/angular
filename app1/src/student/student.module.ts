import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StudentRoutingModule } from "./student.routing.module";

import { StudentListComponent } from "./student.list.component";
import { StudentDetailComponent } from "./student.detail.component";
import { StudentCreateComponent } from "./student.create.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StudentRoutingModule
    ],
    declarations: [
        StudentListComponent,
        StudentDetailComponent,
        StudentCreateComponent
    ],
    providers: []
})
export class StudentModule { }