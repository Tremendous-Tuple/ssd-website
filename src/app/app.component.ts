import { Component, AfterViewInit } from '@angular/core';
import { faDiscord, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AuthService } from './shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit{
  isAdmin = false;
  constructor(library: FaIconLibrary,public authService: AuthService) {
    library.addIcons(faDiscord, faLinkedin, faGithub);
  }
  ngAfterViewInit(): void {
    if(this.authService.isLoggedIn == true) {
      this.isAdmin = true;
    }
  }
  logOut() {
    this.authService.SignOut().then(() => {window.location.reload();});
    // console.log("logging in...");
  }
  title = 'ssd-website'
  discordLink = 'https://discord.gg/5SyB3yx';
  linkedinLink = 'https://www.linkedin.com/company/80386674';
  gitHubLink = 'https://github.com/ufssd';
}
