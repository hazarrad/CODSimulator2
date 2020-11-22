import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SimulatorComponent } from './simulator/simulator.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
    { path: '', component: GetStartedComponent },
    { path: 'simulator', component: SimulatorComponent },
    { path: 'Result', component: ResultComponent }
  ];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

    
 }