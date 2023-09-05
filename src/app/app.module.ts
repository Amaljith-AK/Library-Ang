import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AddbookComponent } from './adminpanel/addbook/addbook.component';
import { BookdetailsComponent } from './adminpanel/bookdetails/bookdetails.component';
import { BorrowdetailsComponent } from './adminpanel/borrowdetails/borrowdetails.component';
import { UsersComponent } from './adminpanel/users/users.component';
import { BorrowbookComponent } from './borrowbook/borrowbook.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminpanelComponent,
    AddbookComponent,
    BookdetailsComponent,
    BorrowdetailsComponent,
    UsersComponent,
    BorrowbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
