import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { InstructorComponent } from './instructor/instructor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InstructorDashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: InstructorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorModuleRoutingModule {}
