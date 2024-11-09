import { Component, OnInit } from '@angular/core';
import { Expense } from '../../model/expense';
import { ExpenseServiceService } from '../../service/expense-service.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent implements OnInit {
  expense?: Expense[];
  currentexpense: Expense = {};
  currentIndex = -1;
  category = '';

  constructor(private expenseService: ExpenseServiceService) { }

  ngOnInit(): void {
    this.retrieveexpense();
  }

  retrieveexpense(): void {
    this.expenseService.getAll()
      .subscribe(
        data => {
          this.expense = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveexpense();
    this.currentexpense = {};
    this.currentIndex = -1;
  }

  setActiveexpense(expense: Expense, index: number): void {
    this.currentexpense = expense;
    this.currentIndex = index;
  }

  removeAllExpense(): void {
    this.expenseService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

}
