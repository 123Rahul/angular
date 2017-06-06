import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AltModule } from "../alt/alt.module";
import { Datatable } from "../datatable/datatable.module";

import { AppComponent } from './app.component';
import { Sample1Component } from "./sample1.component";
import { AppHttpService } from "./app.http-service";

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AltModule,
    Datatable
  ],
  providers: [ 
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
