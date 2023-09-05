import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent {
  books:any=[]
  constructor(private ds:DataService,private r:Router){
    this.ds.showbooks().then(res=>res.json()).then(res=>this.books=res)
  }
}
