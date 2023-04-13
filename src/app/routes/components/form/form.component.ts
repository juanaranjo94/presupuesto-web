import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../../../core/services/budget.service';
import { Concept } from '../../../core/models/concept';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

formBudget!: FormGroup;
concept!: Concept;
operation = [
  {
    abbreviation: 'ing',
    sign: '+',
  },
  {
    abbreviation: 'egr',
    sign: '-',
  }
]

constructor(private _fb: FormBuilder, private _budgetSvc: BudgetService) {
  this.initForm();
}

private initForm(): void {
  this.formBudget = this._fb.group({
    operation: ['ing', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    value: ['400', [Validators.required, Validators.min(0)]]
  });
}

send(){
  if (this.formBudget.invalid) return;


  this.concept = this.formBudget.value;
  const operation = this.concept.operation;


// Send the form to the budget
  operation === 'ing'
  ? this._budgetSvc.listIncome.push(this.concept)
  : this._budgetSvc.listExpenses.push(this.concept)
  
  
  //emoji = control + command + space
  //console.log('✅', this.formBudget.value);

  // Reset form
  this.formBudget.reset();
}


}
