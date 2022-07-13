import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // currentUser:any
  // currentAcno:any

  // db: any = {
  //   1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000, transaction:[] },
  //   1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000, transaction:[] },
  //   1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000, transaction:[] }
  // }

  constructor(private http:HttpClient) {
    // this.getDetails()
  }

  // getDetails() {
  //   if(localStorage.getItem("database")) {
  //     this.db = JSON.parse(localStorage.getItem("database") || '')
  //   }
  //   if(localStorage.getItem("currentUser")) {
  //     this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
  //   }
  //   if(localStorage.getItem("currentAcno")) {
  //     this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || '')
  //   }
  //}

  // saveDetails() {
  //   if(this.db) {
  //     localStorage.setItem("database", JSON.stringify(this.db) )
  //   }
  //   if(this.currentUser) {
  //     localStorage.setItem("currentUser", JSON.stringify(this.currentUser) )
  //   }
  //   if(this.currentAcno) {
  //     localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno) )
  //   }
  // }

  login(acno: any, pswd: any) {

    const data={
      acno,
      pswd
    }
    return this.http.post('http://localhost:3000/login',data)
    
  }

  register(username: any, acno: any, password: any) {
    // let db = this.db

    // if (acno in db) {
    //   return false
    // } else {
    //   //? insert in db
    //   db[acno] = {
    //     acno, username, password, "balance": 0, transaction:[]
    //   }
    //   // ? to view updated db
    //   console.log(db);
    //   this.saveDetails()
    //   return true
    // }
    const data={
      username,
      acno,
      password
    }
    return this.http.post('http://localhost:3000/register',data)
  }

  deposit(acno:any, pswd:any, amt:any) {

    const data={
      acno,
      pswd,
      amt
    }
    

    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
  }
  //appending token to header
  getOptions(){
    const token= localStorage.getItem('token')
    let headers= new HttpHeaders()
    if(token){
      headers = headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
  }
  withdraw(acno:any, pswd:any, amt:any) {

    // var amount = parseInt(amt)
    // let db = this.db
    // if(acno in db) {

    //   if(pswd == db[acno]["password"]) {
    //     if(db[acno]["balance"] > amount) {
    //       db[acno]["balance"] -= amount
    //       db[acno].transaction.push({
    //         type:"debit",
    //         amount:amount
    //       })
    //       this.saveDetails()
    //       return db[acno]["balance"]
    //     } else {
    //       alert('insufficient balance')
    //       return false
    //     }
        
    //   } else {
    //     alert('incorrect password')
    //     return false
    //   }
    // } else {
    //   alert('user does not exist')
    //   return false
    // }
    const data={
      acno,
      pswd,
      amt
    }
    

    return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
  }
    

  getTransaction(acno:any) {
    const data={
      acno
    }
    return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
  }
deleteAcc(acno:any){
return this.http.delete('http://localhost:3000/deleteAcc/' +acno,this.getOptions())
}
}
