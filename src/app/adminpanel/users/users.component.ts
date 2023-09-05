import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userdet:any=[]
  constructor(private ds:DataService){
    this.ds.userdetails().then(res=>res.json()).then(res=>{
      this.userdet=res
      for(let i of this.userdet){
        console.log(i)
      }
    })

  }
}
