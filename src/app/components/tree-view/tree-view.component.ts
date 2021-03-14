import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  nodes: TreeNode[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.nodes = this.api.server.get();
  }

  handdleSelection({node}) {
    if (node.type === 'table') { this.showTable(node.key); return; }
    node.expanded = !node.expanded;
  }

  showTable(id) {
    console.log(id);
  }

}
