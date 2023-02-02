import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StudentDashboardComponent } from './student-dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StudentDashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent,
      },
    ],
  },
  // {
  //   path:'dashboard1',
  //   component:DashboardComponent,

  // }
  // {
  //   path: 'login',
  //   component:SideBarComponent,
  //   children: [{
  //     path: '', component:DashboardComponent,
  //   }]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentDashboardRoutingModule {}
