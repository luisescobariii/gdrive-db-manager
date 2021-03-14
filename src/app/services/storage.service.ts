import { Injectable } from '@angular/core';

export class StorageVariables {
  static items= {
    preferredLanguage: 'preferredLanguage',
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
    preferredLanguage: localStorage.getItem(StorageVariables.items.preferredLanguage) ?? this.getUserLanguagePreference(),
    preferredTheme: localStorage.getItem(StorageVariables.items.preferredTheme) ?? this.getUserThemePreference(),
  }

  set = {
    preferredLanguage: (language: string) => localStorage.setItem(StorageVariables.items.preferredLanguage, language),
    preferredTheme: (theme: string) => localStorage.setItem(StorageVariables.items.preferredTheme, theme),
  }

  private getUserLanguagePreference() {
    return navigator?.language ? navigator.language.split('-')[0] : 'en';
  }

  private getUserThemePreference() {
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      return StorageVariables.theme.dark;
    }
    return StorageVariables.theme.light;
  }

}
