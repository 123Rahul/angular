import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampleListComponent } from "./sample-list.component";
import { Sample1Component } from "./sample1.component";
import { AltDynamicFormComponent } from "./alt-dynamic-form.component";
import { AltControlService } from "./alt-control.service";
import { AltHttpService } from "./alt-http.service";
import { AltEventsService } from "./alt-events.service";

@NgModule({
  declarations: [
    AppComponent,
    SampleListComponent,
    Sample1Component,
    AltDynamicFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    AltControlService, 
    AltHttpService,
    AltEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
