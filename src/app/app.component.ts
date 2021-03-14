import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { StorageService, StorageVariables as vars } from './services/storage.service';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDarkTheme = false;

  languages: MenuItem[] = [
    { label: 'English', command: () => this.changeLanguage('en') },
    { label: 'Español', command:  () => this.changeLanguage('es') },
  ];

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private storage: StorageService,
    private translate: TranslateService,
    private primeConfig: PrimeNGConfig) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.isDarkTheme = this.storage.get.preferredTheme === vars.theme.dark;
    this.changeTheme();
    this.changeLanguage(this.storage.get.preferredLanguage);
  }

  changeTheme() {
    if (this.isDarkTheme) {
      this.doc.getElementById('theme-link').setAttribute('href', 'theme-dark.css');
      this.doc.getElementsByTagName('body')[0].classList.add(vars.theme.dark);
      this.storage.set.preferredTheme(vars.theme.dark);
    } else {
      this.doc.getElementById('theme-link').setAttribute('href', 'theme-light.css');
      this.doc.getElementsByTagName('body')[0].classList.remove(vars.theme.dark);
      this.storage.set.preferredTheme(vars.theme.light);
    }
  }

  changeLanguage(code: string) {
    this.translate.use(code);
    this.translate.get('primeng').subscribe(res => this.primeConfig.setTranslation(res));
    this.storage.set.preferredLanguage(code);
  }

}
