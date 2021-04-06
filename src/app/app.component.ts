import { Component } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faDiscord, faFacebook, faGithub);
  }
  title = 'ssd-website'
  discordLink = 'https://discord.gg/5SyB3yx';
  facebookLink = 'https://www.facebook.com/groups/ufssd';
  gitHubLink = 'https://github.com/ufssd';
}
