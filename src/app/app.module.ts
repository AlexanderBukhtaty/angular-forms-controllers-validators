import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TdFormComponent } from './td-form/td-form.component';
import { DdFormComponent } from './dd-form/dd-form.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    DdFormComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
