import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseDetailssComponent } from './components/expense-detailss/expense-detailss.component';


const routes: Routes = [{ path: '', redirectTo: 'expenses', pathMatch: 'full' },
  
  { path: 'expenses/:id', component: ExpenseDetailssComponent },
  { path: 'expenses', component: ExpenseListComponent },
 
  { path: 'add', component: AddExpenseComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
