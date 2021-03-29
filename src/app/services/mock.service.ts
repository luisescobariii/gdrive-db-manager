import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  mockLists = {
    types: [
      { name: 'any', code: 0 },
      { name: 'boolean', code: 1 },
      { name: 'date', code: 2 },
      { name: 'number', code: 3 },
      { name: 'string', code: 4 },
    ],
    initialOptions: [
      { name: '', code: 0 },
      { name: 'date(\'format\')', code: 1 },
      { name: 'increment()', code: 2 },
      { name: 'uuid()', code: 3 },
    ]
  };

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
      id: 0,
      label: 'DB 1', icon: 'fas fa-database',
      children: [
        { id: 1, label: 'Tables', icon: 'fas fa-folder', children: [
          { id: 2, label: 'Table 1', icon: 'fas fa-table', type: 'leaf' },
          { id: 3, label: 'Table 2', icon: 'fas fa-table', type: 'leaf' },
          { id: 4, label: 'Table 3', icon: 'fas fa-table', type: 'leaf' },
        ]},
        {id: 5, label: 'Queries', icon: 'fas fa-folder', children: [
          { id: 6, label: 'Query 1', icon: 'fas fa-paper-plane', type: 'leaf' },
          { id: 7, label: 'Query 2', icon: 'fas fa-paper-plane', type: 'leaf' },
        ]},
      ]
    },
    {
      id: 8,
      label: 'DB 2', icon: 'fas fa-database',
      children: [
        {id: 9, label: 'Tables', icon: 'fas fa-folder', children: [
          { id: 10, label: 'Table 4', icon: 'fas fa-table', type: 'leaf' },
          { id: 11, label: 'Table 5', icon: 'fas fa-table', type: 'leaf' },
        ]},
        { id: 12, label: 'Queries', icon: 'fas fa-folder', children: [] }
      ]
    }
  ];

  general = {
    getLists: () => this.mockLists
  };

  table = {
    get: () => this.mockTable
  };

  server = {
    get: () => this.mockServer
  };

  constructor() { }
}
