import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../model/expense';
import { Observable } from 'rxjs';
const baseUrl =  'http://localhost:8090/api/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {


  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(baseUrl);
  }

  get(id: any): Observable<Expense> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
