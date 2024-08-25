// theme.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme = 'light-theme';

  switchTheme(theme: string) {
    this.activeTheme = theme;
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
  }

  getActiveTheme() {
    return this.activeTheme;
  }
}
