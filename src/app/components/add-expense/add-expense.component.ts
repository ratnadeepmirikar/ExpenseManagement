import { Component, OnInit } from '@angular/core';
import { Expense } from '../../model/expense';
import { ExpenseServiceService } from '../../service/expense-service.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent implements OnInit {
  expense: Expense = {
    id : 0,
    category: '',
    amount: 0,
    comment: '',
    createdAt: '',
    updatedAt:''
     
 
   };
   submitted = false;
 
   constructor(private expenseService: ExpenseServiceService) { }
 
   ngOnInit(): void {
   }
 
   saveExpense(): void {
     const data = {       
      category: this.expense.category,
       amount: this.expense.amount,
       comment: this.expense.comment,
       createdAt : this.expense.createdAt,
       updatedAt : this.expense.updatedAt
      
     };
 
     this.expenseService.create(data)
       .subscribe(
         response => {
           console.log(response);
           this.submitted = true;
         },
         error => {
           console.log(error);
         });
   }
 
   newExpense(): void {
     this.submitted = false;
     this.expense = {
      category: '',
      amount: 0,
      comment: '',
      createdAt: '',
      updatedAt:''
       
     };
   }

}
