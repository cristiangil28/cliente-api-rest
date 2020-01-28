import {Routes} from '@angular/router';
import {AddEmployeeComponent} from './components/add-employee/add-employee.component';
import {EditEmployeeComponent} from './components/edit-employee/edit-employee.component';
import {ListEmployeeComponent} from './components/list-employee/list-employee.component';
import {AddActivityComponent} from './components/add-activity/add-activity.component';
import {ListActivityComponent} from './components/list-activity/list-activity.component';

export const ROUTES:Routes =[
    {path: 'add-employee',component:AddEmployeeComponent},
    {path: 'edit-employee',component:EditEmployeeComponent},
    {path: 'list-employee',component:ListEmployeeComponent},
    {path: 'add-activity',component:AddActivityComponent},
    {path: 'list-activity',component:ListActivityComponent}
]