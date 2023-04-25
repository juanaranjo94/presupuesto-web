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
redBorder: boolean = false;
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
    operation: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    value: ['', [Validators.required, Validators.min(0)]]
  });

  // Agrega la clase red-border cuando esta NO es  un expenses
  this.formBudget.get('operation')?.valueChanges.subscribe((value) => {
    return (this.redBorder = value !== 'ing');
    console.log('operation: ', value);
    
  })
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
  // Inicializar all operations in income (+)
  this.formBudget.patchValue({operation: 'ing'});
}


}
