import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  books:any=[]
  constructor(private ds:DataService,private r:Router){
    this.ds.showbooks().then(res=>res.json()).then(res=>this.books=res)
  }

  borrow(e:any){
    console.log(e.target.id)
    this.r.navigate(['borrow',e.target.id])

  }
  
  logout(){
    localStorage.clear()
    this.r.navigate([''])
  }
  
}
