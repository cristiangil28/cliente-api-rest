import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: []
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmployeeService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  onSubmit() {
    this.service.createEmployee( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-employee']);
        
      });
  }

}
