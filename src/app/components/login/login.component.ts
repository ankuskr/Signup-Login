import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
onSubmit(data:any) {
  console.log(data.value);
}
  
  
signin = new FormGroup({
  email: new FormControl(),
  password: new FormControl(),
  remPass: new FormControl(),
})

}
