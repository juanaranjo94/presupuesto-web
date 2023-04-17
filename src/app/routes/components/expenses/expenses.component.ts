import { Component, Input, OnInit, inject } from '@angular/core';
import { Concept } from 'src/app/core/models/concept';
import { BudgetService } from 'src/app/core/services/budget.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {

  // Create input 
  @Input() totalIncome: number = 0;

  listExpenses: Concept[] = [];

  //importnado el service
  private _budgetService = inject(BudgetService);

// Trae la lista de services
  ngOnInit(): void {
    this.listExpenses = this._budgetService.listExpenses;
  }

  // Eliminar valores de la lista de services
  delete(index: number) {
    this.listExpenses.splice(index, 1);
  }

  calculetePorcentage( expense: Concept ): number{
    return expense.value / this.totalIncome;
  }
  
  
}

