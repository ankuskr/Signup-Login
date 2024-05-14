import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import {Storage} from ''

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {

  constructor(private router:Router){}
  cUser: boolean = false;
  signupUser: any[] = [];

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
  });

  onSubmit() {
    this.signupUser.push(this.userForm.value);
    localStorage.setItem('signUp', JSON.stringify(this.signupUser));
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
    });
    this.router.navigate(['/signin']);
    console.log("Signup successful");
  }
}
