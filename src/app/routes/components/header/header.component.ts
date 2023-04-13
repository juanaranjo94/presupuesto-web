import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Input() totalIncome: number = 0;
@Input() totalExpenses: number = 0;
@Input() totalBudget: number = 0;
@Input() totalPercentage: number = 0;

}
