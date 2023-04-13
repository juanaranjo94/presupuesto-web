import { Component, OnInit, inject } from '@angular/core';
import { Concept } from 'src/app/core/models/concept';
import { BudgetService } from 'src/app/core/services/budget.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    totalIncome: Concept[]=[];
    totalExpenses: Concept[]=[];

    private _budgetSvc= inject(BudgetService);

    ngOnInit(){
        this.totalIncome = this._budgetSvc.listIncome;
        this.totalExpenses = this._budgetSvc.listExpenses;
    }

    getTotalIncome(): number {
      let total = 0;
  
      this.totalIncome.map((Income: Concept) => {
        total += Income.value;
      });

      return total;
    }

    getTotalExpenses(): number {
      let total = 0;
  
      this.totalExpenses.map((Expenses: Concept) => {
        total += Expenses.value;
      });

      return total;
    }

    getTotalBudget(): number {
      return this.getTotalIncome() - this.getTotalExpenses();
    }

    getTotalBudgetPercentage(): number {
      return (this.getTotalBudget() / this.getTotalIncome()) * 100;
    }
}
