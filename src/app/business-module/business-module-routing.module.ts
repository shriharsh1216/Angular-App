import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BusinessComponent,
      },
    ],
  },
  {
    path: 'employee',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: EmployeesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessModuleRoutingModule {}
