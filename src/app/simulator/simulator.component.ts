import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  leadCost :number=0;
  leadBudget :number=0;
  // name = new FormControl('');
  // name1 = new FormControl('');
  // hello:number=name * name;
  conversionCost :number=0;
  conversionBudget :number=0;
  charegFix :number=0;
  salesPrice :number=0;
  // leadOrders:number=this.leadBudget/this.leadCost;
  // leadConf50:number=0.5 * this.leadOrders;
  // leadConf30:number=0.3 * this.leadOrders;
  // leadCostConf50:number= this.leadBudget /this.leadConf50;
  // leadCostConf30:number= this.leadBudget /this.leadConf30;

  constructor() { }

  ngOnInit() {
   // this.leadCost.replace()
  }

  updateName() {
    // this.name.setValue('Nancy');
  }

  
}

