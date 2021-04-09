import { Component, AfterViewInit } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AuthService } from "./shared/services/auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit{
  isAdmin: boolean = false;
  constructor(library: FaIconLibrary,public authService: AuthService) {
    console.log('test ');
    library.addIcons(faDiscord, faFacebook, faGithub);
  }
  ngAfterViewInit(): void {
    if(this.authService.isLoggedIn == true) {
      this.isAdmin = true;
    }
  }
  logOut() {
    this.authService.SignOut().then((result) => {window.location.reload();});
    console.log("logging in...");
  }
  title = 'ssd-website'
  discordLink = 'https://discord.gg/5SyB3yx';
  facebookLink = 'https://www.facebook.com/groups/ufssd';
  gitHubLink = 'https://github.com/ufssd';
}
