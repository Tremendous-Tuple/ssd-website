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
    console.log('test ');
    library.addIcons(faDiscord, faFacebook, faGithub);
  }
  title = 'ssd-website'
  discordLink = 'https://discord.gg/SXkJpdV6';
  facebookLink = 'https://facebook.com';
  gitHubLink = 'https://github.com/Tremendous-Tuple';
}
