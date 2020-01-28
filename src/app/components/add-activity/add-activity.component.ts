import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})

export class AddActivityComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private router: Router, private service: ActivityService) { }
  addForm: FormGroup;

  
  ngOnInit() {
    var datoEmployee=JSON.parse(localStorage.getItem('employee'));
    this.addForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
    });
  }
  onSubmit() {
    
    this.service.createActivity ( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['list-activity']);
        
      });
  }

}
