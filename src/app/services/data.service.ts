import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  signup(first_name:any,last_name:any,email:any,username:any,password:any){
    let data={
      first_name,
      last_name,
      email,
      username,
      password
    }

    return fetch('http://127.0.0.1:8000/bookdet/user/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  login(username:any,password:any){
    let data={
      username,
      password
    }

    return fetch('http://127.0.0.1:8000/bookdet/token/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }

  showbooks(){
    return fetch('http://127.0.0.1:8000/bookdet/books/',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`token ${localStorage.getItem('token')}`
      },
    })
  }
  specificbook(id:any){
    return fetch(`http://127.0.0.1:8000/bookdet/books/${id}/`,{
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`token ${localStorage.getItem('token')}`
      },
    })
  }
  borrowthisbook(id:any,date_of_return:any){

    let data={
      date_of_return
    }
    return fetch(`http://127.0.0.1:8000/bookdet/books/${id}/borrow_this_book/`,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`token ${localStorage.getItem('token')}`
      },
    })
  }

  userdetails(){
    return fetch('http://127.0.0.1:8000/bookdet/userdet/',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`token ${localStorage.getItem('token')}`
      },
    })
  }

  borrowdetails(){
    return fetch('http://127.0.0.1:8000/borrowdet/borrow/',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`token ${localStorage.getItem('token')}`
      },
    })
  }

  addBooks(data:any){
    return fetch('http://127.0.0.1:8000/bookdet/books/',{
      method: 'POST',
      body:data,
      headers: {
        // 'Content-type': 'application/json; charset=UTF-8',
        'Accept':'*/*',
        'Authorization':`token ${localStorage.getItem('token')}`
      },
    })
  }

}
