import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessModuleRoutingModule } from './business-module-routing.module';
import { BusinessComponent } from './business/business.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    BusinessComponent,
    DashboardComponent,
    SideBarComponent,
    TopBarComponent,
    EmployeesComponent,
  ],
  imports: [
    CommonModule,
    BusinessModuleRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    ChartsModule,
    MatInputModule,
    MatProgressBarModule,
  ],
})
export class BusinessModuleModule {}
