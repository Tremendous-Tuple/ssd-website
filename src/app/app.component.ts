import { Component } from '@angular/core';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faDiscord, faGithub);
  }
  discordLink = 'https://discord.gg/SXkJpdV6';
  gitHubLink = 'https://github.com/Tremendous-Tuple';
}
