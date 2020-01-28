import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) {
    console.log('Servicio employee Funcionando');
  }

  getEmployees(): Observable<Employee[]> {
    var sufix ='listarempleados';
    return this.http.get(`${this.baseUrl}/${sufix}`).pipe(
      map(data => data as Employee[])
    );
  }

  getCustomer(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    var sufix ='empleado';
    return this.http.post<Employee>(`${this.baseUrl}/${sufix}`, employee, {headers: this.httpHeaders});
  }

  updateCustomer(customer: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl, customer, {headers: this.httpHeaders});
  }

  deleteCustomer(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}
