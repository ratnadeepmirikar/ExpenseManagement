import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../model/expense';
import { ExpenseServiceService } from '../../service/expense-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expense-detailss',
  templateUrl: './expense-detailss.component.html',
  styleUrl: './expense-detailss.component.css'
})
export class ExpenseDetailssComponent implements OnInit{
  @Input() viewMode = false;
 

  @Input() currentexpense: Expense = {
    id : 0,
    category: '',
    amount: 0,
    comment: '',
    createdAt: '',
    updatedAt:''
  };
  

  
  message = '';
 

  constructor(
    private expenseService: ExpenseServiceService,
    private route:ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.message = '';
      this.getExpense(this.route.snapshot.params['id']);
    }
  
    getExpense(id: number): void {
      this.expenseService.get(id)
        .subscribe(
          data => {
            this.currentexpense = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

 

  updateExpense(): void {
    this.message = '';

    this.expenseService.update(this.currentexpense.id, this.currentexpense)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This Expense was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteExpense(): void {
    this.expenseService.delete(this.currentexpense.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/expenses']);
        },
        error => {
          console.log(error);
        });
  }

}
