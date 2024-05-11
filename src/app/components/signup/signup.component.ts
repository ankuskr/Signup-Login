import { Router} from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private service:ServiceService,private router:Router){}
  user = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    phone: new FormControl(),
  });
  // onSubmit(data:any) {
  //   this.service.createUser(data).subscribe((res) => {
  //     console.log(res);
  //   });
    
  // }

  cUser:boolean = false;
  onSubmit() {
    localStorage.setItem('user', JSON.stringify(this.user.value));
    console.log(this.user.value);  
    this.cUser = true;
    this.router.navigate(['/signin']);  
  }
}
