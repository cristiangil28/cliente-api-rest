import { Component, OnInit } from '@angular/core';
import { Activity } from '../../model/activity';
import { ActivityService } from '../../services/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-activity',
  templateUrl: './list-activity.component.html',
  styleUrls: ['./list-activity.component.css']
})
export class ListActivityComponent implements OnInit {
  activities : Activity[];
  constructor(private router: Router, private service: ActivityService) { }

  ngOnInit() {
    this.service.getActivities().subscribe(data => (this.activities = data));
  }
  addActivity(): void {
    this.router.navigate(['add-activity']);
  }
}
