import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  mockTable = {
    name: 'My table',
    columns: [
      { name: 'id', required: false },
      { name: 'username', required: false },
      { name: 'password', required: false },
      { name: 'id', required: false },
      { name: 'username', required: false },
      { name: 'password', required: false },
    ]
  };

  mockServer = [
    {
      key: '0',
      label: 'DB 1', icon: 'pi pi-cloud',
      children: [
        {key: '0-0', label: 'Tables', icon: 'pi pi-folder', children: [
          { key: '0-0-0', label: 'Table 1', icon: 'pi pi-table', type: 'table' },
          { key: '0-0-1', label: 'Table 2', icon: 'pi pi-table', type: 'table' },
          { key: '0-0-2', label: 'Table 3', icon: 'pi pi-table', type: 'table' },
        ]},
        {key: '0-1', label: 'Queries', icon: 'pi pi-folder', children: [
          { key: '0-1-0', label: 'Query 1', icon: 'pi pi-send', type: 'proc' },
          { key: '0-1-1', label: 'Query 2', icon: 'pi pi-send', type: 'proc' },
        ]},
      ]
    },
    {
      key: '1',
      label: 'DB 2', icon: 'pi pi-cloud',
      children: [
        {key: '1-0', label: 'Tables', icon: 'pi pi-folder', children: [
          { key: '1-0-0', label: 'Table 4', icon: 'pi pi-table', type: 'table' },
          { key: '1-0-1', label: 'Table 5', icon: 'pi pi-table', type: 'table' },
        ]},
        { key: '1-1', label: 'Queries', icon: 'pi pi-folder', children: [] }
      ]
    }
  ];

  table = {
    get: () => this.mockTable
  };

  server = {
    get: () => this.mockServer
  };

  constructor() { }
}
