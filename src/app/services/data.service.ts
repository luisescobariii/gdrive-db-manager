import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServerInfo } from '../models/api';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  config = new BehaviorSubject<ServerInfo>(null);

  constructor(private api: ApiService) {
    this.api.general.getConfig().subscribe(res => this.config.next(res));
  }

}
