import { Injectable } from '@angular/core';
import { Concept } from '../models/concept';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  listIncome: Concept[] = [
    {
      operation: 'ing',
      description: 'Salario ',
      value: 2000
    },
    {
      operation: 'ing',
      description: 'Venta',
      value: 1500
    }
  ];
  listExpenses: Concept[] = [
    {
      operation: 'egr',
      description: 'Renta ',
      value: 900
    },
    {
      operation: 'egr',
      description: 'Ropa',
      value: 435
    }
  ]; 

  constructor() { 
    
    
  }
}
