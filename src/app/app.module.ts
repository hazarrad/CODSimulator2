import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetStartedComponent } from './get-started/get-started.component';
import { AppRoutingModule } from './AppRoutingModule';
import { RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    SimulatorComponent,
    GetStartedComponent,
    ResultComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
