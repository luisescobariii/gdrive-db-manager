import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss']
})
export class QueryViewComponent implements OnInit {

  result = {
    headers: [ 'name', 'type' ],
    records: [
      [ 'Luis', 'man' ],
      [ 'Paula', 'woman' ],
      [ 'Luis', 'man' ],
      [ 'Paula', 'woman' ],
      [ 'Luis', 'man' ],
      [ 'Paula', 'woman' ],
      [ 'Luis', 'man' ],
      [ 'Paula', 'woman' ],
      [ 'Luis', 'man' ],
      [ 'Paula', 'woman' ],
      [ 'Paula', 'woman' ],
      [ 'Luis', 'man' ],
      [ 'Paula', 'woman' ],
      [ 'Luis', 'man' ],
      [ 'Paula', 'woman' ],
      [ 'Luis', 'man' ],
      [ 'Paula', 'woman' ],
      [ 'Luis', 'man' ],
      [ 'Paula', 'woman' ],
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
