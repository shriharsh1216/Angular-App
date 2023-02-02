import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { StudentDashboardModule } from './student-dashboard/student-dashboard.module';
import { BusinessModuleModule } from './business-module/business-module.module';

// import { InstructorModuleModule } from './instructor-module/instructor-module.module';
import { HeaderComponent } from './header/header.component';
import { BillComponent } from './bill/bill.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BillComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    SharedModule,
    StudentDashboardModule,
    BusinessModuleModule,
    // InstructorModuleModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
