import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { DashboardComponent } from './business-module/dashboard/dashboard.component';
import { InstructorDashboardComponent } from './instructor-module/instructor-dashboard/instructor-dashboard.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student-dashboard/student-dashboard.module').then(
        (m) => m.StudentDashboardModule
      ),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./business-module/business-module.module').then(
        (m) => m.BusinessModuleModule
      ),
  },
  {
    path: 'instructor',
    loadChildren: () =>
      import('./instructor-module/instructor-module.module').then(
        (m) => m.InstructorModuleModule
      ),
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
