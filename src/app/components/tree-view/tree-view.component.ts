import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  nodes: TreeNode[];

  constructor() { }

  ngOnInit(): void {
    this.nodes = [
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
  }

  handdleSelection({node}) {
    if (node.type === 'table') { this.showTable(node.key); return; }
    node.expanded = !node.expanded;
  }

  showTable(id) {
    console.log(id);
  }

}
