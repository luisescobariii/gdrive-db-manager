import { Injectable } from '@angular/core';

export class StorageVariables {
  static items= {
    preferredTheme: 'preferredTheme'
  };
  static theme = {
    light: 'light',
    dark: 'dark'
  };
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get = {
    preferredTheme: localStorage.getItem(StorageVariables.items.preferredTheme) ?? this.getUserThemePreference()
  }

  set = {
    preferredTheme: (theme: string) => localStorage.setItem(StorageVariables.items.preferredTheme, theme)
  }

  private getUserThemePreference() {
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      return StorageVariables.theme.dark;
    }
    return StorageVariables.theme.light;
  }

}
