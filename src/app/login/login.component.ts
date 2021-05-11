import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent{

  form: FormGroup;
  loginError:boolean=false;

  constructor(private fb: FormBuilder, public router: Router) {

    this.form = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
   }
 
  login(post: any) {
    if(post.username == 'usertest' && post.password == 'userpassword') {
       this.router.navigate(['/index']);
    }else{
      this.loginError = true;
    }
  }
}