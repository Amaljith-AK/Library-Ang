import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { BorrowbookComponent } from './borrowbook/borrowbook.component';
import { UsersComponent } from './adminpanel/users/users.component';
import { BorrowdetailsComponent } from './adminpanel/borrowdetails/borrowdetails.component';
import { BookdetailsComponent } from './adminpanel/bookdetails/bookdetails.component';
import { AddbookComponent } from './adminpanel/addbook/addbook.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminpanelComponent},
  {path:'borrow/:id',component:BorrowbookComponent},
  {path:'userdet',component:UsersComponent},
  {path:'borrowdet',component:BorrowdetailsComponent},
  {path:'bookdet',component:BookdetailsComponent},
  {path:'addbook',component:AddbookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
