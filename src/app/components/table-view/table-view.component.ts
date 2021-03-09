import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  table = {
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

  types = [
    'any',
    'boolean',
    'date',
    'number',
    'string',
  ];

  initialOptions = [
    '',
    'increment()',
    'uuid()',
    'date(\'format\')',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
