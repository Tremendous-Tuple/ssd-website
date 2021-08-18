import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  isAdmin: boolean = false;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.SignIn(this.username, this.password).then((result) => {window.location.reload();});
    //console.log("logging in...");
    //console.log("email: " + this.username);
    //console.log("password: " + this.password);
  }
}
