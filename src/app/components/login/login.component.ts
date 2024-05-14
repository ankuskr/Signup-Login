import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  signupUser: any[] = []; 

  signInobj = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    remPass: new FormControl(false) 
  });

  // constructor( private router:Router) {}
  constructor(@Inject(PLATFORM_ID) private platformId: Object , private router:Router) {}

  // ngAfterViewInit() {
  //   console.log(localStorage);
  //   const localData = localStorage.getItem('signUp'); 
  //   if (localData) {
  //     this.signupUser = JSON.parse(localData); 
  //   }
  // }


  // ngAfterViewInit() {
  //   if (typeof localStorage !== 'undefined') {
  //     console.log(localStorage);
  //     const localData = localStorage.getItem('signUp'); 
  //     if (localData) {
  //       this.signupUser = JSON.parse(localData); 
  //     }
  //   } else {
  //     console.warn('localStorage is not available. This environment may not support it.');
  //   }
  // }


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // This code will only execute in the browser
      const localData = localStorage.getItem('signUp'); 
      if (localData) {
        this.signupUser = JSON.parse(localData); 
      }
    } else {
      console.warn('localStorage is not available. Running on server-side.');
    }
  }
  

  // ngOnInit() {
  //   console.log(localStorage);
  //   const localData = localStorage.getItem('signUp'); 
  //   if (localData) {
  //     this.signupUser = JSON.parse(localData); 
  //   }
  // }
  isAuth = true;

  signIn() {
    const email = this.signInobj.get('email')?.value; 
    const password = this.signInobj.get('password')?.value; 
    const isUserExist = this.signupUser.find(user => user.email === email && user.password === password);
    
    if (isUserExist) {
      console.log('User found:', isUserExist);
      localStorage.setItem('isAuth','true');
      this.router.navigate(['/todo']);
    } else {
      this.router.navigate(['/**']);
      console.log('User not found');
    }
  }
}