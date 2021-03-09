import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { StorageService, StorageVariables as vars } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDarkTheme = false;

  constructor(@Inject(DOCUMENT) private doc: Document, private storage: StorageService) {}

  ngOnInit(): void {
    this.isDarkTheme = this.storage.get.preferredTheme === vars.theme.dark;
    this.changeTheme();
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
}
