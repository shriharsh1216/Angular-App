import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPlayerComponent } from '../shared/video-player/video-player.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BusinessLoginComponent } from './business-login/business-login.component';
import { CoursesComponent } from './courses/courses.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { PdfComponent } from './courses-pdf/pdf.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VideoComponent } from './courses-video/video.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SellerproductsComponent } from './sellerproducts/sellerproducts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ImageComponent } from './image/image.component';
import { CartComponent } from './cart/cart.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { UserBillComponent } from './user-bill/user-bill.component';
import { JoinusComponent } from './joinus/joinus.component';
import { SellerOrderComponent } from './seller-order/seller-order.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { OpenDialogBoxComponent } from './open-dialog-box/open-dialog-box.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '' },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'productDetails',
        component: ProductDetailsComponent,
      },
      {
        path: 'cartDetails',
        component: CartComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'image',
        component: ImageComponent,
      },
      {
        path: 'homepage',
        component: HomePageComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'aboutus',
        component: AboutUsComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'instructorlogin',
        component: InstructorLoginComponent,
      },
      {
        path: 'businesslogin',
        component: BusinessLoginComponent,
      },
      {
        path: 'coursescategory',
        component: CoursesCategoryComponent,
      },
      {
        path: 'courseslist',
        component: CoursesListComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'video',
        component: VideoComponent,
      },
      {
        path: 'pdf',
        component: PdfComponent,
      },
      {
        path: 'sellerproducts',
        component: SellerproductsComponent,
      },
      {
        path: 'fileUpload',
        component: UploadFilesComponent,
      },
      {
        path: 'userBill',
        component: UserBillComponent,
      },
      {
        path: 'signout',
        component: SignOutComponent,
      },
      
      {
        path: 'joinus',
        
        component: JoinusComponent,
    
            },
            {
              path: 'sellerorder',
              
              component: SellerOrderComponent,
          
                  },
                  {
                    path: 'openDialog',
                    
                    component: OpenDialogBoxComponent,
                
                        }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
