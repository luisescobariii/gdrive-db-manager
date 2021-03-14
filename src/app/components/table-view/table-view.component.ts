import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  table: any;

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

  isDeleteDialogVisible = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.table = this.api.table.get();
    console.log(this.table);
  }

  addRow() {
    this.table.columns.push({ name: '' });
  }

  deleteRow() {
    console.log(this.table.columns.pop());
  }

  deleteTable() {
    
  }

}
