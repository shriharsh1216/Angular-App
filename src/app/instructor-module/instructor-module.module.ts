import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorModuleRoutingModule } from './instructor-module-routing.module';
import { InstructorComponent } from './instructor/instructor.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    InstructorComponent,
    TopBarComponent,
    SideBarComponent,
    InstructorDashboardComponent,
  ],
  imports: [
    CommonModule,
    InstructorModuleRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    ChartsModule,
  ],
})
export class InstructorModuleModule {}
