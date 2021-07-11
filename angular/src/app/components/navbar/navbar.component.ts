import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean = false;
  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.auth.status().subscribe((res) => {
      this.loggedIn = res;
      // console.log('navbar:' + this.loggedIn);
    }, (err) => {
      console.log(err);
    })
  }

}
