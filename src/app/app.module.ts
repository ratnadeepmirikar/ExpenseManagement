import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseDetailssComponent } from './components/expense-detailss/expense-detailss.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    ExpenseDetailssComponent,
    ExpenseListComponent,
    ExpenseDetailssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
