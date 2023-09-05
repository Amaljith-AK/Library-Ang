import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-borrowdetails',
  templateUrl: './borrowdetails.component.html',
  styleUrls: ['./borrowdetails.component.css']
})
export class BorrowdetailsComponent {
  bdet:any=[]
  constructor(private ds:DataService){
    this.ds.borrowdetails().then(res=>res.json()).then(res=>this.bdet=res)
  }
}
