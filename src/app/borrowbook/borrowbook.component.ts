import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css']
})
export class BorrowbookComponent {
  sbook:any=[]
  id:any

  dateForm=this.fb.group({
    date:['',Validators.required]
  })


  constructor(private ds:DataService,private ar:ActivatedRoute,private fb:FormBuilder,private r:Router){
    this.ar.params.subscribe(res=>this.id=res['id'])
    this.ds.specificbook(this.id).then(res=>res.json()).then(res=>this.sbook=res)
  }

  openModal(){
    let modelDiv=document.getElementById('myModal')
    if(modelDiv!=null){
      modelDiv.style.display='block'
    }
  }
  closeModal(){
    let modelDiv=document.getElementById('myModal')
    if(modelDiv!=null){
      modelDiv.style.display='none'
    }
  }


  borrowbook(){
    if(this.dateForm.valid){
      let d:any=this.dateForm.controls.date.value
      this.ds.borrowthisbook(this.id,d).then(res=>res.json).then(res=>{
        alert('Borrowing Successful. Please collect the respective book from library')
        this.r.navigate(['home'])
      }).catch(res=>res.error)
    }
    else{
      alert('enter Date')
    }

  }
}
