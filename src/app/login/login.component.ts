import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private ds:DataService,private fb:FormBuilder,private r:Router){}

  loginForm=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })

  login(){
    if(this.loginForm.valid){
      let username=this.loginForm.controls.username.value
      let password=this.loginForm.controls.password.value
      this.ds.login(username,password).then(res=>res.json()).then(res=>{
        localStorage.setItem('token',res['token'])
        
        if(res['token'] && username=='Admin'){
          alert('Login Success')
          this.r.navigate(['admin'])
        }
        else if(res['token'] && username != 'Admin'){
          alert('Login Success')
          this.r.navigate(['home'])
        }
        else{
          alert('Signup First')
          this.r.navigate(['signup'])
        }
      }).catch(res=>alert('Login Failed'))
    }
    else{
      alert('Invalid Details')
    }
  }



}


