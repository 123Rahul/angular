import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DynamicFormsCoreModule } from "@ng2-dynamic-forms/core";
import { DynamicFormsBasicUIModule } from "@ng2-dynamic-forms/ui-basic";
import { MyDynamicFormComponent } from "../dynamic/my-dynamic-form.component";

import { AltModule } from "../alt/alt.module";
import { Datatable } from "../datatable/datatable.module";

import { AppComponent } from './app.component';
import { Sample1Component } from "./sample1.component";
import {  } from "../dynamic/";
import { AppHttpService } from "./app.http-service";

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    MyDynamicFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AltModule,
    Datatable,
    DynamicFormsCoreModule.forRoot(), 
    DynamicFormsBasicUIModule
  ],
  providers: [ 
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
