import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styles: []
})
export class ListEmployeeComponent implements OnInit {
  employees : Employee[];
  constructor(private router: Router, private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(data => (this.employees = data));
  }
  
  editEmployee(employee: Employee): void {
    localStorage.removeItem('editEmployeeId');
    localStorage.setItem('editEmployeeId', employee.id.toString());
    this.router.navigate(['edit-employee']);
  }

  addActivity(employee:Employee){
    localStorage.removeItem('editEmployeeId');
    localStorage.setItem("employee", JSON.stringify(employee));

    this.router.navigate(['add-activity']);
  }


  addEmployee(): void {
    this.router.navigate(['add-employee']);
  }
}
