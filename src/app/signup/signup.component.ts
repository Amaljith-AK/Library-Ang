import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private ds:DataService,private r:Router,private fb:FormBuilder){}

  signinForm=this.fb.group({
    first_name:['',[Validators.required]],
    last_name:['',[Validators.required]],
    email:['',[Validators.required]],
    username:['',[Validators.required]],
    password:['',[Validators.required]],
    cpassword:['',[Validators.required]],
  })

  signin(){
    if(this.signinForm.valid){
      let first_name=this.signinForm.controls.first_name.value
      let last_name=this.signinForm.controls.last_name.value
      let email=this.signinForm.controls.email.value
      let username=this.signinForm.controls.username.value
      let pass1=this.signinForm.controls.password.value
      let pass2=this.signinForm.controls.cpassword.value

      if(pass1==pass2){
        this.ds.signup(first_name,last_name,email,username,pass1).then(res=>res.json()).then(res=>{
          alert('signin successful')
          this.r.navigate([''])
        }).catch(res=>alert('signup failed'))
      }
      else{
        alert('password doesnt match')
      }
    }
    else{
      alert('enter valid data')
    }
  }
}
