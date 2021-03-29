import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServerInfo } from '../models/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private host = environment.apiHostUrl;

  general = {
    getConfig: (): Observable<ServerInfo> => this.get<ServerInfo>('getConfig'),
    getLists: () => null
  };

  table = {
    get: () => null
  };

  server = {
    get: () => null
  };

  constructor(private client: HttpClient) {}

  private get<T = any> (endpoint: string, params: any = {}): Observable<T> {

    const httpParams = new HttpParams();
    httpParams.set('e', endpoint);

    for (const key of Object.keys(params)) { httpParams.set(key, params[key]); }

    return this.client.get<T>(this.host, {
      observe: 'body',
      params: httpParams,
      responseType: 'json',
    });
  }
}
