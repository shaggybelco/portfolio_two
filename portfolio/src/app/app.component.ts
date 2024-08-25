import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  activeSection: string = 'home';
  newTheme: string = 'light-theme';

  toggleTheme() {
    this.newTheme = this.themeService.getActiveTheme() === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.switchTheme(this.newTheme);
  }

  ngOnInit() {
    this.themeService.switchTheme('light-theme'); // or 'dark-theme' based on preference
  }

  title = 'portfolio';

}
