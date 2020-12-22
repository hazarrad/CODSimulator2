import { Component, Input, OnInit } from '@angular/core';
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

  
  @Input() leadData=[];
  he:number=0;
  // leadOrders:number=this.leadBudget/this.leadCost;
  // leadConf50:number=0.5 * this.leadOrders;
  // leadConf30:number=0.3 * this.leadOrders;
  // leadCostConf50:number= this.leadBudget /this.leadConf50;
  // leadCostConf30:number= this.leadBudget /this.leadConf30;

  constructor() { }

  ngOnInit() {
   // this.leadCost.replace()
   this.he=this.leadBudget / this.leadCost;

  }
  amount: number = 500;
  updateName() {
    // this.name.setValue('Nancy');
  }

  depose(){
    this.amount +=100;
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
    
   
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.he=this.leadBudget / this.leadCost;
 
  }
  
}

