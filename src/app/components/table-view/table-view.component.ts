import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  lists: any = {};
  table: any;

  isDeleteDialogVisible = false;

  constructor(private api: MockService) { }

  ngOnInit(): void {
    this.lists = this.api.general.getLists();
    this.table = this.api.table.get();
    // console.log(this.table);
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
