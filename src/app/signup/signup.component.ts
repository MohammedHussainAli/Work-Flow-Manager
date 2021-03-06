import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public signUpForm !: FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username:[''],
      email:[''],
      password:['']
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/users",this.signUpForm.value)
    .subscribe(res => {
      alert("Sign-Up Successful")
      this.signUpForm.reset();
      this.router.navigate(['/login']);
    },err => {
      alert("Something went wrong, please try again...!");
    })
  }
  

}
