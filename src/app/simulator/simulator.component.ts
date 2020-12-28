import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
  @ViewChild('scrollMe', { static: false }) private myScrollContainer: ElementRef;

  leadCost: number = 0;
  leadBudget: number = 0;
  conversionCost: number = 0;
  conversionBudget: number = 0;
  isShown: boolean = false;

  /********************Lead *************************** */
  //  for Delivered
  Conf50Input: number = 0;
  Conf30Input: number = 0;
  Conf50Dev50Output: number = 0;
  Conf50Dev30Output: number = 0;
  Conf30Dev50Output: number = 0;
  Conf30Dev30Output: number = 0;

  //  for Cost per Delivered
  Conf50CP50Output: number = 0;
  Conf50CP30Output: number = 0;
  Conf30CP50Output: number = 0;
  Conf30CP30Output: number = 0;

  // Profit
  Conf50Dev50Profit: number = 0;
  Conf50Dev30Profit: number = 0;
  Conf30Dev50Profit: number = 0;
  Conf30Dev30Profit: number = 0;

  /********************Convirsion *************************** */
  //  for Delivered
  ConvConf50Input: number = 0;
  ConvConf30Input: number = 0;
  ConvConf50Dev50Output: number = 0;
  ConvConf50Dev30Output: number = 0;
  ConvConf30Dev50Output: number = 0;
  ConvConf30Dev30Output: number = 0;

  //  for Cost per Delivered
  ConvConf50CP50Output: number = 0;
  ConvConf50CP30Output: number = 0;
  ConvConf30CP50Output: number = 0;
  ConvConf30CP30Output: number = 0;

  // Profit
  ConvConf50Dev50Profit: number = 0;
  ConvConf50Dev30Profit: number = 0;
  ConvConf30Dev50Profit: number = 0;
  ConvConf30Dev30Profit: number = 0;


  form = new FormGroup({
    charegFix: new FormControl('', [Validators.required, Validators.pattern("^[0-9\.]*$")]),
    salesPrice: new FormControl('', [Validators.required, Validators.pattern("^[0-9\.]*$")]),
    leadCostform: new FormControl('', [Validators.required, Validators.pattern("^[0-9\.]*$")]),
    leadBudgetForm: new FormControl('', [Validators.required, Validators.pattern("^[0-9\.]*$")]),
    conversionCostform: new FormControl('', [Validators.required, Validators.pattern("^[0-9\.]*$")]),
    conversionBudgetform: new FormControl('', [Validators.required, Validators.pattern("^[0-9\.]*$")]),
  });

  constructor() { }

  ngOnInit() {
    this.setValue()
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.status === 'VALID') {
      this.isShown = true;
      this.Conf50Delivery();
      this.Conf30Delivery();
      this.ConvConf50Delivery();
      this.ConvConf30Delivery();
      this.sweetSuccess();
    }
  }

  Conf50Delivery() {
    if (this.form.value.leadBudgetForm == 0 || this.form.value.leadCostform == 0) {
      this.Conf50Input = 0;
      this.Conf50Dev50Output = 0;
      this.Conf50Dev30Output = 0;
      this.Conf50CP50Output = 0;
      this.Conf50CP30Output = 0;
      this.Conf50Dev50Profit = 0;
      this.Conf50Dev30Profit = 0;
    } else {
      this.Conf50Input = 0.5 * this.form.value.leadBudgetForm / this.form.value.leadCostform;
      //  For delivered
      this.Conf50Dev50Output = 0.5 * this.Conf50Input;
      this.Conf50Dev30Output = 0.3 * this.Conf50Input;
      // For cost per delivery
      this.Conf50CP50Output = this.form.value.leadBudgetForm / (0.5 * this.Conf50Input);
      this.Conf50CP30Output = this.form.value.leadBudgetForm / (0.3 * this.Conf50Input);
      // Profit for Confirmation 50 
      this.Conf50Dev50Profit = (this.form.value.salesPrice * this.Conf50Dev50Output - (this.form.value.charegFix * this.Conf50Dev50Output) - (this.Conf50Dev50Output * this.Conf50CP50Output));
      this.Conf50Dev30Profit = (this.form.value.salesPrice * this.Conf50Dev30Output - (this.form.value.charegFix * this.Conf50Dev30Output) - (this.Conf50Dev30Output * this.Conf50CP30Output));
    }
  }

  Conf30Delivery() {
    if (this.form.value.leadBudgetForm == 0 || this.form.value.leadCostform == 0) {
      this.Conf30Input = 0;
      this.Conf30Dev50Output = 0;
      this.Conf30Dev30Output = 0;
      this.Conf30CP50Output = 0;
      this.Conf30CP30Output = 0;
      this.Conf30Dev50Profit = 0;
      this.Conf30Dev30Profit = 0;
    } else {
      this.Conf30Input = 0.3 * this.form.value.leadBudgetForm / this.form.value.leadCostform;
      //  For delivered
      this.Conf30Dev50Output = 0.5 * this.Conf30Input
      this.Conf30Dev30Output = 0.3 * this.Conf30Input
      //  for Cost per delivered
      this.Conf30CP50Output = this.form.value.leadBudgetForm / (0.5 * this.Conf30Input)
      this.Conf30CP30Output = this.form.value.leadBudgetForm / (0.3 * this.Conf30Input)
      // Profit for Confirmation 50 
      this.Conf30Dev50Profit = (this.form.value.salesPrice * this.Conf30Dev50Output - (this.form.value.charegFix * this.Conf30Dev50Output) - (this.Conf30Dev50Output * this.Conf30CP50Output));
      this.Conf30Dev30Profit = (this.form.value.salesPrice * this.Conf30Dev30Output - (this.form.value.charegFix * this.Conf30Dev30Output) - (this.Conf30Dev30Output * this.Conf30CP30Output));
    }
  }

  ConvConf50Delivery() {
    if (this.form.value.conversionBudgetform == 0 || this.form.value.conversionCostform == 0) {
      this.ConvConf50Input = 0;
      this.ConvConf50Dev50Output = 0;
      this.ConvConf50Dev30Output = 0;
      this.ConvConf50CP50Output = 0;
      this.ConvConf50CP30Output = 0;
      this.ConvConf50Dev50Profit = 0;
      this.ConvConf50Dev30Profit = 0;
    } else {
      this.ConvConf50Input = 0.5 * this.form.value.conversionBudgetform / this.form.value.conversionCostform;
      //  for Delivered
      this.ConvConf50Dev50Output = 0.5 * this.ConvConf50Input;
      this.ConvConf50Dev30Output = 0.3 * this.ConvConf50Input;
      // For cost per delivery
      this.ConvConf50CP50Output = this.form.value.conversionBudgetform / (0.5 * this.ConvConf50Input);
      this.ConvConf50CP30Output = this.form.value.conversionBudgetform / (0.3 * this.ConvConf50Input);
      // Profit for Confirmation 50 
      this.ConvConf50Dev50Profit = (this.form.value.salesPrice * this.ConvConf50Dev50Output - (this.form.value.charegFix * this.ConvConf50Dev50Output) - (this.ConvConf50Dev50Output * this.ConvConf50CP50Output));
      this.ConvConf50Dev30Profit = (this.form.value.salesPrice * this.ConvConf50Dev30Output - (this.form.value.charegFix * this.ConvConf50Dev30Output) - (this.ConvConf50Dev30Output * this.ConvConf50CP30Output));
    }
  }

  ConvConf30Delivery() {
    if (this.form.value.conversionBudgetform == 0 || this.form.value.conversionCostform == 0) {
      this.ConvConf30Input = 0;
      this.ConvConf30Dev50Output = 0;
      this.ConvConf30Dev30Output = 0;
      this.ConvConf30CP50Output = 0;
      this.ConvConf30CP30Output = 0;
      this.ConvConf30Dev50Profit = 0;
      this.ConvConf30Dev30Profit = 0;

    } else {
      this.ConvConf30Input = 0.3 * this.form.value.conversionBudgetform / this.form.value.conversionCostform;
      //  For delivered
      this.ConvConf30Dev50Output = 0.5 * this.ConvConf30Input
      this.ConvConf30Dev30Output = 0.3 * this.ConvConf30Input
      //  for Cost per delivered
      this.ConvConf30CP50Output = this.form.value.conversionBudgetform / (0.5 * this.ConvConf30Input)
      this.ConvConf30CP30Output = this.form.value.conversionBudgetform / (0.3 * this.ConvConf30Input)
      // Profit for Confirmation 50 
      this.ConvConf30Dev50Profit = (this.form.value.salesPrice * this.ConvConf30Dev50Output - (this.form.value.charegFix * this.ConvConf30Dev50Output) - (this.ConvConf30Dev50Output * this.ConvConf30CP50Output));
      this.ConvConf30Dev30Profit = (this.form.value.salesPrice * this.ConvConf30Dev30Output - (this.form.value.charegFix * this.ConvConf30Dev30Output) - (this.ConvConf30Dev30Output * this.ConvConf30CP30Output));
    }
  }

  setValue() {
    this.form.setValue({ charegFix: 0, salesPrice: 0, leadCostform: 0, leadBudgetForm: 0, conversionCostform: 0, conversionBudgetform: 0 });
  }


  scrollToBottom(): void {
    try {
      // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      this.myScrollContainer.nativeElement.scroll({
        top: this.myScrollContainer.nativeElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    } catch (err) { }
  }

  sweetSuccess() {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
      Swal.fire({
        icon: 'success',
        title: 'Good job',
        showConfirmButton: false,
        timer: 1000
      }).then((result) => {
        if (this.isShown === true) {
          this.scrollToBottom()
        }
      })
    })
  }
}

