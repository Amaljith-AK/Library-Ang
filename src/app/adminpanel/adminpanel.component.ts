import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {
  constructor(private r:Router){

  }
  lgout(){
    localStorage.clear()
    this.r.navigate([''])
  }
}
