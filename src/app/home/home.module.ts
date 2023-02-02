import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
// import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { BusinessLoginComponent } from './business-login/business-login.component';
import { OtpComponent } from './otp/otp.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { CoursesComponent } from './courses/courses.component';
import { VideoComponent } from './courses-video/video.component';
import { PdfComponent } from './courses-pdf/pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';

import { SellerproductsComponent } from './sellerproducts/sellerproducts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ImageComponent } from './image/image.component';
import { CartComponent } from './cart/cart.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { UserBillComponent } from './user-bill/user-bill.component';
import { JoinusComponent } from './joinus/joinus.component';
import { SellerOrderComponent } from './seller-order/seller-order.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { SignOutComponent } from './sign-out/sign-out.component';
import { FooterComponent } from './footer/footer.component';
import { OpenDialogBoxComponent } from './open-dialog-box/open-dialog-box.component';
@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    HomePageComponent,
    AboutUsComponent,
    SigninComponent,
    InstructorLoginComponent,
    BusinessLoginComponent,
    OtpComponent,
    CoursesComponent,
    VideoComponent,
    PdfComponent,
    CoursesCategoryComponent,
    CoursesListComponent,
    NavComponent,
    ProfileComponent,
    SellerproductsComponent,
    ProductDetailsComponent,
    ImageComponent,
    CartComponent,
    UploadFilesComponent,
    UserBillComponent,
    JoinusComponent,
    SellerOrderComponent,
    SignOutComponent,
    FooterComponent,
    OpenDialogBoxComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    // MatRadioModule,
    MatSelectModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatDialogModule,
    MaterialFileInputModule,
    PdfViewerModule,
     HttpClientModule,
     MatPaginatorModule,
  ],
  providers: [],
})
export class HomeModule {}
