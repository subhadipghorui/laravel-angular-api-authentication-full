import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token:any;

  constructor(private route:ActivatedRoute, private auth:AuthenticationService) { }

  error={
    password:null
  };
  message:any;

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.token = param.token;
    })
  }

  onSubmit(form: NgForm){
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;

    this.auth.reset(this.token, password, password_confirmation).subscribe((res:any)=>{
     this.message = res.message;
    }, (err)=>{
     this.error =err.error.errors;
    })
  }

}
