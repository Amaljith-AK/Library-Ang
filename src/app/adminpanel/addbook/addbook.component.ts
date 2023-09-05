import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  proImg:any;
  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){

  }

  addForm=this.fb.group({
    title:['',Validators.required],
    author:['',Validators.required],
    isbn:['',Validators.required],
    genre:['',Validators.required]
  })

  addBook(){

    let t:any=this.addForm.controls.title.value
    let a:any=this.addForm.controls.author.value
    let i:any=this.addForm.controls.isbn.value
    let g:any=this.addForm.controls.genre.value

    let formd=new FormData()
    formd.append('title',t)
    formd.append('author',a)
    formd.append('isbn',i)
    formd.append('genre',g)
    formd.append('image',this.proImg,this.proImg.name)

    this.ds.addBooks(formd).then(res=>res.json()).then(res=>{
      if(res){
        alert('Book added succesfully')
        this.r.navigate(['admin'])
      }
      else{
        alert('Book adding Failed')
      }
    })
    
  }

  addProImage(e:any){
    this.proImg=e.target.files[0]
    console.log(this.proImg)
  }
}
